import * as React from 'react';

import { projectName } from 'shared/const';
import { useIsMobile } from 'shared/hooks';
import { Title, Wrapper } from 'shared/ui-kit';
import { MenuIcon } from 'shared/ui-kit/icons';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <header data-mobile={isMobile} className={styles.header}>
      <Wrapper className={styles.wrapper}>
        <div data-mobile={isMobile} className={styles.content}>
          <Title variant="h4" weight={400}>
            {projectName}
          </Title>

          <MenuIcon />

          <Title variant="h4" weight={400} italic uppercase>
            Подключить
          </Title>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
