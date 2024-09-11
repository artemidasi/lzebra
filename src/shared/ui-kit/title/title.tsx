import * as React from 'react';

import cn from 'clsx';

import { useIsMobile } from 'shared/hooks';

import { TitleVariant } from './type';

import styles from './title.module.scss';

interface TitleProps {
  className?: string;
  style?: React.CSSProperties;

  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  family?: 'Montserrat' | 'Golos Text';
  color?: 'black' | 'gray' | 'pink';

  variant?: TitleVariant;
  onClick?: () => void;

  italic?: boolean;
  uppercase?: boolean;
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = (props) => {
  const {
    variant = 'h1',
    children,
    className,
    style = {},
    weight = 400,
    family = 'Montserrat',
    color = 'black',
    onClick,
    italic,
    uppercase,
    ...otherProps
  } = props;

  const isMobile = useIsMobile();

  const classes = cn(styles.title, styles[`title_${variant}`], className, {
    [styles.title_italic]: italic,
    [styles.title_uppercase]: uppercase,
  });

  const getColor = () => {
    switch (color) {
      case 'black': {
        return 'var(--black-color)';
      }

      case 'gray': {
        return 'var(--gray-medium-color)';
      }

      case 'pink': {
        return 'var(--pink-color)';
      }
    }
  };

  const CustomTag = `${variant}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag
      {...otherProps}
      data-mobile={isMobile}
      onClick={onClick}
      className={classes}
      style={{
        ...style,
        fontWeight: weight,
        color: getColor(),
        fontFamily: `${family}, sans-serif`,
      }}>
      {children}
    </CustomTag>
  );
};

export default Title;
