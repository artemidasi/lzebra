import * as React from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { projectName } from 'shared/const';
import { useIsMobile } from 'shared/hooks';
import { Title, Wrapper } from 'shared/ui-kit';
import { MenuIcon } from 'shared/ui-kit/icons';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  const headerRef = React.useRef<HTMLElement>(null);

  const { contextSafe } = useGSAP(() => {});

  const handleGoContacts = contextSafe(() => {
    gsap.to(window, {
      duration: 2,
      scrollTo: '#contacts',
    });

    gsap.to(headerRef.current, {
      padding: 0,
      duration: 3,
      background: '#F8E8E7',
      ease: 'power1.inOut',
    });
  });

  return (
    <header ref={headerRef} data-mobile={isMobile} className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div data-mobile={isMobile} className={styles.content}>
          <Title variant="h4" weight={400}>
            {projectName}
          </Title>

          <MenuIcon />

          <Title
            onClick={handleGoContacts}
            variant="h4"
            weight={400}
            italic
            uppercase
            className={styles.link}>
            Подключить
          </Title>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
