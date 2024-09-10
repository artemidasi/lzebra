import * as React from 'react';

export interface File {
  icon: React.ReactNode;
  title: string;
}

export interface Item {
  iconSrc: string;
  title: string;
  description: string;

  maxWidth: {
    desktop: number;
    mobile: number;
  };

  files: File[];
}
