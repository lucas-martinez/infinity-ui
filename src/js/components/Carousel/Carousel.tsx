import React, { Children, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../contexts';
import { defaultProps } from '../../default-props';
import { A11yTitleType, AlignSelfType, GridAreaType, MarginType, normalizeColor } from "../../utils";
import { Box } from '../Box';
import { Button } from '../Button';
import { DivIntrinsicProps } from '../intrinsic-elements';
import { Keyboard } from '../Keyboard';
import { Stack } from '../Stack';

export interface CarouselProps extends DivIntrinsicProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  controls?: boolean | "arrows" | "selectors";
  gridArea?: GridAreaType;
  margin?: MarginType;
  fill?: boolean;
  play?: number;
  initialChild?: number;
}

const Carousel = ({
  initialChild,
  play,
  children,
  controls,
  fill,
  onFocus,
  onBlur,
  ...rest
}: CarouselProps) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const [focus, setFocus] = useState<any>();

  const timerRef = useRef<any>();

  const [indexes, setIndexes] = useState<any>({
    activeIndex: initialChild,
  });

  const { activeIndex, priorActiveIndex } = indexes;
  const lastIndex = Children.count(children) - 1;

  useEffect(() => {
    if (play) {
      const timer = setInterval(() => {
        if (activeIndex < lastIndex) {
          setIndexes({
            activeIndex: activeIndex + 1,
            priorActiveIndex: activeIndex,
          });
        } else {
          setIndexes({
            activeIndex: 0,
            priorActiveIndex: activeIndex,
          });
        }
      }, play);

      timerRef.current = timer;

      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, [activeIndex, play, children, lastIndex]);

  const onRight = () => {
    if (activeIndex >= lastIndex) {
      return;
    }
    clearInterval(timerRef.current);
    setIndexes({
      activeIndex: activeIndex + 1,
      priorActiveIndex: activeIndex,
    });
  };

  const onLeft = () => {
    if (activeIndex <= 0) {
      return;
    }
    clearInterval(timerRef.current);
    setIndexes({
      activeIndex: activeIndex - 1,
      priorActiveIndex: activeIndex,
    });
  };

  const onSelect = index => () => {
    clearInterval(timerRef.current);
    setIndexes({ activeIndex: index, priorActiveIndex: activeIndex });
  };

  const showArrows = controls && controls !== 'selectors';
  const showSelectors = controls && controls !== 'arrows';

  const CurrentIcon = theme.carousel.icons.current;
  const iconColor = normalizeColor(
    theme.carousel.icons.color || 'control',
    theme,
  );

  const selectors: any[] = [];
  const wrappedChildren = Children.map(children, (child, index) => {
    selectors.push(
      <Button
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        icon={
          <CurrentIcon color={activeIndex === index ? iconColor : undefined} />
        }
        onClick={onSelect(index)}
      />,
    );

    let animation;
    if (index === activeIndex) {
      if (priorActiveIndex !== undefined) {
        animation = {
          type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
          size: 'xlarge',
          duration: theme.carousel.animation.duration,
        };
      }
    } else if (index === priorActiveIndex) {
      animation = {
        type: 'fadeOut',
        duration: theme.carousel.animation.duration,
      };
    } else {
      animation = { type: 'fadeOut', duration: 0 };
    }

    return (
      <Box fill={fill} overflow="hidden">
        <Box fill={fill} animation={animation}>
          {child}
        </Box>
      </Box>
    );
  });

  const NextIcon = theme.carousel.icons.next;
  const PreviousIcon = theme.carousel.icons.previous;
  const nextIconDisabled = activeIndex >= lastIndex;
  const previousIconDisabled = activeIndex <= 0;

  return (
    <Keyboard onLeft={onLeft} onRight={onRight}>
      <Stack guidingChild={activeIndex} fill={fill} {...rest}>
        {wrappedChildren}
        <Box
          tabIndex="0"
          focus={focus}
          onFocus={event => {
            setFocus(true);
            if (onFocus) onFocus(event);
          }}
          onBlur={event => {
            setFocus(false);
            if (onBlur) onBlur(event);
          }}
          fill
          direction="row"
          justify="between"
        >
          {showArrows && (
            <Button
              fill="vertical"
              icon={
                <PreviousIcon
                  color={normalizeColor(
                    previousIconDisabled
                      ? theme.carousel.disabled.icons.color
                      : theme.carousel.icons.color,
                    theme,
                  )}
                />
              }
              plain
              disabled={previousIconDisabled}
              onClick={onLeft}
              hoverIndicator
            />
          )}
          {showSelectors && (
            <Box justify="end" fill={!showArrows && 'horizontal'}>
              <Box direction="row" justify="center">
                {selectors}
              </Box>
            </Box>
          )}
          {showArrows && (
            <Button
              fill="vertical"
              icon={
                <NextIcon
                  color={normalizeColor(
                    nextIconDisabled
                      ? theme.carousel.disabled.icons.color
                      : theme.carousel.icons.color,
                    theme,
                  )}
                />
              }
              plain
              disabled={nextIconDisabled}
              onClick={onRight}
              hoverIndicator
            />
          )}
        </Box>
      </Stack>
    </Keyboard>
  );
};

Carousel.defaultProps = {
  initialChild: 0,
  controls: true,
};
Object.setPrototypeOf(Carousel.defaultProps, defaultProps);
Carousel.displayName = 'Carousel';

let CarouselDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  CarouselDoc = require('./doc').doc(Carousel);
}
const CarouselWrapper = CarouselDoc || Carousel;

export { CarouselWrapper as Carousel };

