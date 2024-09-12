import * as React from 'react';
import Marquee from 'react-fast-marquee';

import { useIsMobile } from 'shared/hooks';
import { Wrapper } from 'shared/ui-kit';
import { SchemaIcon } from 'shared/ui-kit/icons';

import styles from './styles.module.scss';

const SchemaSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section data-mobile={isMobile} className={styles.section}>
      <Wrapper>
        <div data-mobile={isMobile} className={styles.container}>
          {isMobile ? (
            <Marquee speed={100}>
              <SchemaIcon className={styles.image} />
            </Marquee>
          ) : (
            <SchemaIcon className={styles.image} />
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default SchemaSection;
