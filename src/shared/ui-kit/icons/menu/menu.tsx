import * as React from 'react';

import { useIsMobile } from 'shared/hooks';

const MenuIcon: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <svg
      width="36"
      height="14"
      viewBox="0 0 36 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="1.5" fill="#191919" />
      <rect y="8" width="36" height="1.5" fill="#191919" />
      <rect y="12" width="29.1429" height="1.5" fill="#191919" />
      <rect y="4" width="36" height="1.5" fill="#191919" />
    </svg>
  );
};

export default MenuIcon;
