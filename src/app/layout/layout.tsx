import * as React from 'react';

import Footer from 'app/footer';
import Header from 'app/header';

import styles from './styles.module.scss';

interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
