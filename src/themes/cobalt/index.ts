import { FlattenInterpolation } from 'styled-components';
import ExtendedTheme from '../../components/ThemeQ/PartialExtendedTheme';
import { ColorType, deepMerge, ElevationType } from '../../js/utils';
import alert from './alert';
import anchor from './anchor';
import box from './box';
import breadcrumbs from './breadcrumbs';
import button from './button';
import calendar from './calendar';
import carousel from './carousel';
import chart from './chart';
import checkBox from './checkBox';
import clock from './clock';
import code from './code';
import collapsible from './collapsible';
import colors from './colors';
import control from './control';
import dataTable from './dataTable';
import diagram from './diagram';
import drop from './drop';
import font from './font';
import form from './form';
import formField from './formField';
import grid from './grid';
import grommet from './grommet';
import heading from './heading';
import icon from './icon';
import layer from './layer';
import list from './list';
import margin from './margin';
import menu from './menu';
import meter from './meter';
import padding from './padding';
import paper from './paper';
import paragraph from './paragraph';
import radioButton from './radioButton';
import rangeInput from './rangeInput';
import rangeSelector from './rangeSelector';
import select from './select';
import sidebar from './sidebar';
import tab from './tab';
import table from './table';
import tabs from './tabs';
import text from './text';
import textArea from './textArea';
import textInput from './textInput';
import video from './video';
import worldMap from './worldMap';

export type Color = ColorType;
export type Elevation = ElevationType;
export type Extend = FlattenInterpolation<any> | string | ((...args: any) => void);

export type ComponentTheme<K extends keyof Omit<ExtendedTheme, 'global'>> = Omit<
  ExtendedTheme[K],
  'extend'
> & {
  extend: Extend;
};

export type PartialTheme<K extends keyof Omit<ExtendedTheme, 'global'>> = {
  [P in K]: Partial<ComponentTheme<K>>;
} & {
  global?: Partial<ExtendedTheme['global']>;
};

export interface ThemeGeneratorArgs {
  baseSpacing: number;
  scale: number;
}

export type PartialThemeGenerator<K extends keyof Omit<ExtendedTheme, 'global'>> = ({
  baseSpacing,
  scale,
}: ThemeGeneratorArgs) => PartialTheme<K>;

export interface StyledComponent {
  color?: Color;
  extend?: Extend;
  fontWeight?: number;
  hover?: {
    extend?: Extend;
    textDecoration?: string;
  };
  textDecoration?: string;
}

export const generator = (
  { baseSpacing = 24, scale = 6 } = {},
  generators: PartialThemeGenerator<any>[] = []
): Partial<ExtendedTheme> =>
  deepMerge(
    {
      global: {
        colors,
        font,
        focus: {
          border: {
            color: 'transparent',
          },
        },
      },
    },
    [
      alert,
      anchor,
      box,
      breadcrumbs,
      button,
      calendar,
      carousel,
      chart,
      checkBox,
      clock,
      code,
      collapsible,
      control,
      dataTable,
      diagram,
      drop,
      form,
      formField,
      grid,
      grommet,
      heading,
      icon,
      layer,
      list,
      margin,
      menu,
      meter,
      padding,
      paper,
      paragraph,
      radioButton,
      rangeInput,
      rangeSelector,
      select,
      sidebar,
      tab,
      table,
      tabs,
      text,
      textArea,
      textInput,
      video,
      worldMap,
      ...generators,
    ].reduce<Partial<ExtendedTheme>>(
      (acc, generate) => (generate ? deepMerge(acc, generate({ baseSpacing, scale })) : acc),
      {}
    )
  );
