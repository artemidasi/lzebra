import * as React from 'react';

import { useGSAP } from '@gsap/react';
import { useOrientation } from '@reactuses/core';
import Footer from 'app/footer';
import Header from 'app/header';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { gsap } from 'gsap';

import { Stub } from 'shared/ui-kit';

import styles from './styles.module.scss';

interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  const [state] = useOrientation();

  const isLandscape =
    state.angle === 90 &&
    (state.type === 'landscape-primary' ||
      state.type === 'landscape-secondary');

  useGSAP(() => {
    gsap.to(window, {
      scrollTo: {
        x: 0,
        y: 0,
      },
    });
  });

  React.useEffect(() => {
    const { body } = document;

    body.scrollTo(0, 0);

    if (isLandscape) {
      disableBodyScroll(body);
    } else {
      enableBodyScroll(body);
    }
  }, [isLandscape]);

  if (isLandscape) return <Stub />;

  return (
    <React.Fragment>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
