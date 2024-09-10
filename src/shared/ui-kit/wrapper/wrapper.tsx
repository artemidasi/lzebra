import * as React from 'react';

import cn from 'clsx';

import { useIsMobile } from 'shared/hooks';

import styles from './styles.module.scss';

interface WrapperProps {
  className?: string;
}

const Wrapper: React.FC<React.PropsWithChildren<WrapperProps>> = ({
  children,
  className,
  ...props
}) => {
  const isMobile = useIsMobile();

  return (
    <div
      {...props}
      data-mobile={isMobile}
      className={cn(styles.wrapper, className)}>
      {children}
    </div>
  );
};

export default Wrapper;
