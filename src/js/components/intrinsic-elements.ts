import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ColorType } from '../utils';
import { ThemeProps } from 'styled-components';
import { ThemeType } from '../themes';

export type ElementProps<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;

export interface ThemedElementProps<T> extends ElementProps<T> {}

export interface ThemedStyledElementProps<T>
  extends Omit<ThemedElementProps<T>, 'color'> {
  color?: ColorType;
}

export interface AnchorIntrinsicProps
  extends ThemedStyledElementProps<HTMLAnchorElement> {}

export interface AreaIntrinsicProps
  extends ThemedStyledElementProps<HTMLAreaElement> {}

export interface AudioIntrinsicProps
  extends ThemedStyledElementProps<HTMLAudioElement> {}

export interface BodyIntrinsicProps
  extends ThemedStyledElementProps<HTMLBodyElement> {}

export interface ButtonIntrinsicProps
  extends ThemedStyledElementProps<HTMLButtonElement> {}

export interface DivIntrinsicProps
  extends ThemedStyledElementProps<HTMLDivElement> {}

export interface FormIntrinsicProps
  extends ElementProps<HTMLFormElement> {}

export interface HeadingIntrinsicProps
  extends ThemedStyledElementProps<HTMLHeadingElement> {}

export interface ImageIntrinsicProps
  extends ThemedStyledElementProps<HTMLImageElement> {
  alt?: string;
  src: string;
}

export interface InputIntrinsicProps
  extends ThemedStyledElementProps<HTMLInputElement> {}

export interface ParagraphIntrinsicProps
  extends ThemedStyledElementProps<HTMLParagraphElement> {}

export interface SelectIntrinsicProps
  extends ThemedStyledElementProps<HTMLSelectElement> {}

export interface SpanIntrinsicProps
  extends ThemedStyledElementProps<HTMLSpanElement> {}

export interface SvgIntrinsicProps
  extends ThemedStyledElementProps<SVGSVGElement> {}

export interface TableIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableElement> {}

export interface TableBodyIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableSectionElement> {}

export interface TableColIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableColElement> {}

export interface TableCaptionIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableCaptionElement> {}

export interface TableCellIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableCellElement> {
  colSpan?: number;
}

export interface TableDataCellIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableDataCellElement> {}

export interface TableHeaderIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableSectionElement> {}

export interface TableHeaderCellIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableHeaderCellElement> {}

export interface TableRowIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableRowElement> {}

export interface TableSectionIntrinsicProps
  extends ThemedStyledElementProps<HTMLTableSectionElement> {}

export interface TemplateIntrinsicProps
  extends ThemedStyledElementProps<HTMLTemplateElement> {}

export interface TextAreaIntrinsicProps
  extends ThemedStyledElementProps<HTMLTextAreaElement> {}

export interface TitleIntrinsicProps
  extends ThemedStyledElementProps<HTMLTitleElement> {}

export interface TrackIntrinsicProps
  extends ThemedStyledElementProps<HTMLTrackElement> {}

export interface UListIntrinsicProps
  extends ThemedStyledElementProps<HTMLUListElement> {}

export interface VideoIntrinsicProps
  extends ThemedStyledElementProps<HTMLVideoElement> {}

export interface WebViewIntrinsicProps
  extends ThemedStyledElementProps<HTMLWebViewElement> {}
