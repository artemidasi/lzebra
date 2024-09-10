import * as React from 'react';

import imageSrc from 'public/images/banner.png';

import { Image } from 'shared/ui-kit';

const BannerImage: React.FC = () => {
  return <Image src={imageSrc} alt="banner-image" />;
};

export default BannerImage;
