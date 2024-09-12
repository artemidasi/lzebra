import { useMediaQuery } from '@reactuses/core';

export const useIsMobile = () => {
  const isMobile = useMediaQuery('(max-width: 968px)');

  return isMobile;
};
