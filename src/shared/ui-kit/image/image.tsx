import * as React from 'react';
import { Img, ImgProps } from 'react-image';

import cn from 'clsx';

import { useIsMobile } from 'shared/hooks';

import styles from './styles.module.scss';

interface ImageProps extends ImgProps {}

const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  const isMobile = useIsMobile();

  return (
    <Img
      data-mobile={isMobile}
      className={cn(styles.image, className)}
      {...props}
    />
  );
};

export default Image;
