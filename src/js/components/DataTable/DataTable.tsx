import React, { useCallback, useMemo, useState } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Body } from './Body';
import { GroupedBody } from './GroupedBody';
import {
  buildFooterValues,
  buildGroups,
  buildGroupState,
  filterAndSortData,
  initializeFilters,
  normalizePrimaryProperty,
} from './buildState';
import { StyledDataTable } from './StyledDataTable';

const contexts = ['header', 'body', 'footer'];

const normalizeProp = (prop, context) => {
  if (prop) {
    if (prop[context]) return prop[context];
    if (contexts.some(c => prop[c])) return undefined;
    return prop;
  }
  return undefined;
};

import { 
  A11yTitleType, 
  AlignSelfType, 
  GridAreaType, 
  MarginType,
} from "../../utils";
import { TableIntrinsicProps } from '../intrinsic-elements';

export interface DataTableProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  background?: 
    string | 
    {
      color?: string, dark?: string, light?: string,
      header?: string | {color?: string, dark?: string, light?: string},
      body?: string | {color?: string, dark?: string, light?: string} | string[],
      footer?: string | {color?: string, dark?: string, light?: string}
    };
  border?: boolean | "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all" | {color?: string | {dark?: string,light?: string},side?: "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all",size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string,header?: boolean | "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all" | {color?: string | {dark?: string,light?: string},side?: "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all",size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string},body?: boolean | "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all" | {color?: string | {dark?: string,light?: string},side?: "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all",size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string},footer?: boolean | "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all" | {color?: string | {dark?: string,light?: string},side?: "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all",size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string}};
  gridArea?: GridAreaType;
  margin?: MarginType;
  columns?: {
    align?: "center" | "start" | "end",
    aggregate?: "avg" | "max" | "min" | 'sum',
    footer?: React.ReactNode | {aggregate?: boolean},
    header?: string | React.ReactNode | {aggregate?: boolean},
    primary?: boolean,property: string,
    render?: ((...args: any[]) => any),
    search?: boolean,
    sortable?: boolean,
    verticalAlign?: "middle" | "top" | "bottom"}[];
  data?: {}[];
  groupBy?: string | { property: string, expand: Array<string>, onExpand: ((...args: any[]) => any) };
  onClickRow?: (((event: React.MouseEvent) => void)) | ((event: {datum?: {}, index?: number}) => void);
  onMore?: ((...args: any[]) => any);
  onSearch?: ((search: string) => void);
  onSort?: ((sort: { property: string, direction: "asc" | "desc" }) => void);
  pad?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | {bottom?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,horizontal?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,left?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,right?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,top?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,vertical?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,header?:"none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | {bottom?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,horizontal?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,left?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,right?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,top?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,vertical?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string},body?:"none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | {bottom?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,horizontal?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,left?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,right?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,top?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,vertical?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string},footer?:"none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | {bottom?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,horizontal?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,left?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,right?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,top?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,vertical?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string}} | string;
  primaryKey?: string;
  replace?: boolean;
  resizeable?: boolean;
  rowProps?: { [_:string]: { background?: {}, border?: {}, pad?: {}}};
  size?: "small" | "medium" | "large" | "xlarge" | string;
  sort?: { property: string, direction: "asc" | "desc" };
  sortable?: boolean;
  step?: number;
}

const DataTable = ({
  background,
  border,
  columns = [],
  data = [],
  groupBy,
  onClickRow, // removing unknown DOM attributes
  onMore,
  onSearch, // removing unknown DOM attributes
  onSort: onSortProp,
  replace,
  pad,
  primaryKey,
  resizeable,
  rowProps,
  size,
  sort: sortProp,
  sortable,
  step = 50,
  ...rest
}: DataTableProps & TableIntrinsicProps) => {
  // property name of the primary property
  const primaryProperty = useMemo(
    () => normalizePrimaryProperty(columns, primaryKey),
    [columns, primaryKey],
  );

  // whether or not we should show a footer
  const showFooter = useMemo(() => columns.filter(c => c.footer).length > 0, [
    columns,
  ]);

  // what column we are actively capturing filter input on
  const [filtering, setFiltering] = useState<any>();

  // the currently active filters
  const [filters, setFilters] = useState<any>(initializeFilters(columns));

  // which column we are sorting on, with direction
  const [sort, setSort] = useState<any>(sortProp || {});

  // the data filtered and sorted, if needed
  const adjustedData = useMemo(
    () => filterAndSortData(data, filters, onSearch, sort),
    [data, filters, onSearch, sort],
  );

  // the values to put in the footer cells
  const footerValues = useMemo(() => buildFooterValues(columns, adjustedData), [
    adjustedData,
    columns,
  ]);

  // if groupBy, an array with one item per unique groupBy key value
  const groups = useMemo(() => buildGroups(columns, adjustedData, groupBy), [
    adjustedData,
    columns,
    groupBy,
  ]);

  // an object indicating which group values are expanded
  const [groupState, setGroupState] = useState<any>(
    buildGroupState(groups, groupBy),
  );

  // any customized column widths
  const [widths, setWidths] = useState<any>({});

  // remember that we are filtering on this property
  const onFiltering = property => setFiltering(property);

  // remember the search text we should filter this property by
  const onFilter = (property, value) => {
    const nextFilters = { ...filters };
    nextFilters[property] = value;
    setFilters(nextFilters);
    // Let caller know about search, if interested
    if (onSearch) onSearch(nextFilters);
  };

  // toggle the sort direction on this property
  const onSort = property => () => {
    let direction;
    if (!sort || property !== sort.property) direction = 'asc';
    else if (sort.direction === 'asc') direction = 'desc';
    else direction = 'asc';
    const nextSort = { property, direction };
    setSort(nextSort);
    if (onSortProp) onSortProp(nextSort);
  };

  // toggle whether the group is expanded
  const onToggleGroup = (groupValue: any) => () => {
    const nextGroupState = { ...groupState };
    nextGroupState[groupValue] = {
      ...nextGroupState[groupValue],
      expanded: !nextGroupState[groupValue].expanded,
    };
    setGroupState(nextGroupState);
    if (typeof groupBy !== 'string' && groupBy?.onExpand) {
      const expandedKeys = Object.keys(nextGroupState).filter(
        k => nextGroupState[k].expanded,
      );
      groupBy.onExpand(expandedKeys);
    }
  };

  // toggle whether all groups are expanded
  const onToggleGroups = () => {
    const expanded =
      Object.keys(groupState).filter(k => !groupState[k].expanded).length === 0;
    const nextGroupState = {};
    Object.keys(groupState).forEach(k => {
      nextGroupState[k] = { ...groupState[k], expanded: !expanded };
    });
    setGroupState(nextGroupState);
    if (typeof groupBy !== 'string' && groupBy?.onExpand) {
      const expandedKeys = Object.keys(nextGroupState).filter(
        k => nextGroupState[k].expanded,
      );
      groupBy.onExpand(expandedKeys);
    }
  };

  // remember the width this property's column should be
  const onResize = useCallback(
    (property, width) => {
      if (widths[property] !== width) {
        const nextWidths = { ...widths };
        nextWidths[property] = width;
        setWidths(nextWidths);
      }
    },
    [widths],
  );

  if (size && resizeable) {
    console.warn('DataTable cannot combine "size" and "resizeble".');
  }

  return (
    <StyledDataTable {...rest}>
      <Header
        background={normalizeProp(background, 'header')}
        border={normalizeProp(border, 'header')}
        columns={columns}
        filtering={filtering}
        filters={filters}
        groups={groups}
        groupState={groupState}
        pad={normalizeProp(pad, 'header')}
        size={size}
        sort={sort}
        widths={widths}
        onFiltering={onFiltering}
        onFilter={onFilter}
        onResize={resizeable ? onResize : undefined}
        onSort={sortable || sortProp || onSortProp ? onSort : undefined}
        onToggle={onToggleGroups}
      />
      {groups ? (
        <GroupedBody
          background={normalizeProp(background, 'body')}
          border={normalizeProp(border, 'body')}
          columns={columns}
          groupBy={groupBy.property ? groupBy.property : groupBy}
          groups={groups}
          groupState={groupState}
          pad={normalizeProp(pad, 'body')}
          primaryProperty={primaryProperty}
          onToggle={onToggleGroup}
          size={size}
        />
      ) : (
        <Body
          background={normalizeProp(background, 'body')}
          border={normalizeProp(border, 'body')}
          columns={columns}
          data={adjustedData}
          onMore={onMore}
          replace={replace}
          onClickRow={onClickRow}
          pad={normalizeProp(pad, 'body')}
          primaryProperty={primaryProperty}
          rowProps={rowProps}
          size={size}
          step={step}
        />
      )}
      {showFooter && (
        <Footer
          background={normalizeProp(background, 'footer')}
          border={normalizeProp(border, 'footer')}
          columns={columns}
          footerValues={footerValues}
          groups={groups}
          pad={normalizeProp(pad, 'footer')}
          primaryProperty={primaryProperty}
          size={size}
        />
      )}
    </StyledDataTable>
  );
};

let DataTableDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  DataTableDoc = require('./doc').doc(DataTable);
}
const DataTableWrapper = DataTableDoc || DataTable;

export { DataTableWrapper as DataTable };
