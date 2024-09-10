import { useMediaQuery } from '@reactuses/core';

export const useIsMobile = () => {
  const isMobile = useMediaQuery('(max-width: 750px)');

  return isMobile;
};
