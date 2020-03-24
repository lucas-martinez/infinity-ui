import React, {
  Children,
  forwardRef,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import {
  A11yTitleType,
  AlignContentType,
  AlignSelfType,
  backgroundIsDark,
  BackgroundType,
  BasisType,
  BorderType,
  ElevationType,
  FillType,
  GapType,
  GridAreaType,
  MarginType,
  PadType,
  PolymorphicType,
  RoundType,
} from '../../utils';
import { Keyboard } from '../Keyboard';
import { StyledBox, StyledBoxGap } from './StyledBox';
import { DivIntrinsicProps } from '../intrinsic-elements';

export interface BoxProps extends DivIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: GridAreaType;
  margin?: MarginType;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignContent?: AlignContentType;
  animation?:
    | 'fadeIn'
    | 'fadeOut'
    | 'jiggle'
    | 'pulse'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'zoomIn'
    | 'zoomOut'
    | {
        type?:
          | 'fadeIn'
          | 'fadeOut'
          | 'jiggle'
          | 'pulse'
          | 'slideUp'
          | 'slideDown'
          | 'slideLeft'
          | 'slideRight'
          | 'zoomIn'
          | 'zoomOut';
        delay?: number;
        duration?: number;
        size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
      }
    | (
        | 'fadeIn'
        | 'fadeOut'
        | 'jiggle'
        | 'pulse'
        | 'slideUp'
        | 'slideDown'
        | 'slideLeft'
        | 'slideRight'
        | 'zoomIn'
        | 'zoomOut'
        | {
            type?:
              | 'fadeIn'
              | 'fadeOut'
              | 'jiggle'
              | 'pulse'
              | 'slideUp'
              | 'slideDown'
              | 'slideLeft'
              | 'slideRight'
              | 'zoomIn'
              | 'zoomOut';
            delay?: number;
            duration?: number;
            size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
          }
      )[];
  background?: BackgroundType;
  basis?: BasisType;
  border?: BorderType;
  direction?:
    | 'row'
    | 'column'
    | 'row-responsive'
    | 'row-reverse'
    | 'column-reverse';
  elevation?: ElevationType;
  flex?: 'grow' | 'shrink' | boolean | { grow?: number; shrink?: number };
  fill?: FillType;
  focusIndicator?: boolean;
  gap?: GapType;
  height?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | string
    | {
        max?:
          | 'xxsmall'
          | 'xsmall'
          | 'small'
          | 'medium'
          | 'large'
          | 'xlarge'
          | 'xxlarge'
          | string;
        min?:
          | 'xxsmall'
          | 'xsmall'
          | 'small'
          | 'medium'
          | 'large'
          | 'xlarge'
          | 'xxlarge'
          | string;
      };
  hoverIndicator?: BackgroundType | boolean;
  justify?:
    | 'around'
    | 'between'
    | 'center'
    | 'end'
    | 'evenly'
    | 'start'
    | 'stretch';
  onClick?: (...args: any[]) => any;
  overflow?:
    | 'auto'
    | 'hidden'
    | 'scroll'
    | 'visible'
    | {
        horizontal?: 'auto' | 'hidden' | 'scroll' | 'visible';
        vertical?: 'auto' | 'hidden' | 'scroll' | 'visible';
      }
    | string;
  pad?: PadType;
  responsive?: boolean;
  round?: RoundType;
  tag?: PolymorphicType;
  as?: PolymorphicType;
  width?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | string
    | {
        max?:
          | 'xxsmall'
          | 'xsmall'
          | 'small'
          | 'medium'
          | 'large'
          | 'xlarge'
          | 'xxlarge'
          | string;
        min?:
          | 'xxsmall'
          | 'xsmall'
          | 'small'
          | 'medium'
          | 'large'
          | 'xlarge'
          | 'xxlarge'
          | string;
      };
  wrap?: boolean | 'reverse';
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      a11yTitle,
      background,
      border,
      children,
      direction = 'column',
      elevation, // munged to avoid styled-components putting it in the DOM
      fill, // munged to avoid styled-components putting it in the DOM
      gap,
      onBlur,
      onClick,
      onFocus,
      overflow, // munged to avoid styled-components putting it in the DOM
      responsive = true,
      tag,
      as,
      wrap, // munged to avoid styled-components putting it in the DOM,
      width, // munged to avoid styled-components putting it in the DOM
      height, // munged to avoid styled-components putting it in the DOM
      tabIndex,
      ...rest
    },
    ref,
  ) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;

    const focusable = useMemo(() => onClick && !(tabIndex! < 0), [
      onClick,
      tabIndex,
    ]);

    const [focus, setFocus] = useState<boolean>();

    const clickProps = useMemo(() => {
      if (focusable) {
        return {
          onClick,
          onFocus: event => {
            setFocus(true);
            if (onFocus) onFocus(event);
          },
          onBlur: event => {
            setFocus(false);
            if (onBlur) onBlur(event);
          },
        };
      }
      const result: any = {};
      if (onBlur) result.onBlur = onBlur;
      if (onClick) result.onClick = onClick;
      if (onFocus) result.onFocus = onFocus;
      return result;
    }, [focusable, onClick, onFocus, onBlur]);

    const adjustedTabIndex = useMemo(() => {
      if (tabIndex !== undefined) return tabIndex;
      if (focusable) return 0;
      return undefined;
    }, [focusable, tabIndex]);

    if (
      (border === 'between' || (border && border.side === 'between')) &&
      !gap
    ) {
      console.warn('Box must have a gap to use border between');
    }

    let contents: ReactNode | ReactNodeArray = children;
    if (gap) {
      contents = [];
      let firstIndex;
      Children.forEach(children, (child, index) => {
        if (child) {
          if (firstIndex === undefined) {
            firstIndex = index;
          } else {
            contents.push(
              <StyledBoxGap
                // eslint-disable-next-line react/no-array-index-key
                key={`gap-${index}`}
                gap={gap}
                directionProp={direction}
                responsive={responsive}
                border={border}
              />,
            );
          }
        }
        contents.push(child);
      });
    }

    if (background || theme.darkChanged) {
      let dark = backgroundIsDark(background, theme);
      const darkChanged = dark !== undefined && dark !== theme.dark;
      if (darkChanged || theme.darkChanged) {
        dark = dark === undefined ? theme.dark : dark;
        contents = (
          <ThemeContext.Provider value={{ ...theme, dark }}>
            {contents}
          </ThemeContext.Provider>
        );
      }
    }

    let content = (
      <StyledBox
        as={!as && tag ? tag : as}
        aria-label={a11yTitle}
        background={background}
        border={border}
        ref={ref}
        directionProp={direction}
        elevationProp={elevation}
        fillProp={fill}
        focus={focus}
        overflowProp={overflow}
        wrapProp={wrap}
        widthProp={width}
        heightProp={height}
        responsive={responsive}
        tabIndex={adjustedTabIndex}
        {...clickProps}
        {...rest}
      >
        {contents}
      </StyledBox>
    );

    if (onClick) {
      content = <Keyboard onEnter={onClick}>{content}</Keyboard>;
    }

    return content;
  },
);

Box.displayName = 'Box';

let BoxDoc;
if (process.env.NODE_ENV !== 'production') {
  BoxDoc = require('./doc').doc(Box); // eslint-disable-line global-require
}
const BoxWrapper = BoxDoc || Box;

export { BoxWrapper as Box };
