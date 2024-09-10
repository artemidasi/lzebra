import * as React from 'react';

import { projectName } from 'shared/const';
import { Title, Wrapper } from 'shared/ui-kit';
import { MenuIcon } from 'shared/ui-kit/icons';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.row}>
            <MenuIcon />

            <div className={styles.company}>
              <Title variant="h6" className={styles.text} uppercase>
                {projectName}
              </Title>
            </div>

            <div className={styles.row}>
              <Title variant="h6" className={styles.text} uppercase>
                COPY
              </Title>

              <Title variant="h6" className={styles.select} uppercase>
                PASTE
              </Title>

              <Title variant="h6" className={styles.text} uppercase>
                RIGHT
              </Title>

              <Title variant="h6" className={styles.text} uppercase>
                &nbsp;{new Date().getFullYear()}
              </Title>
            </div>
          </div>

          <Title variant="h6" className={styles.text} uppercase>
            /endpoint
          </Title>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
