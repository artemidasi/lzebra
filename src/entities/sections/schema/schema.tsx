import * as React from 'react';
import { useIsMobile } from 'shared/hooks';

import Marquee from "react-fast-marquee";


import styles from './styles.module.scss'

import { SchemaIcon } from 'shared/ui-kit/icons';
import { Wrapper } from 'shared/ui-kit';

const SchemaSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section data-mobile={isMobile} className={styles.section}>
      <Wrapper>
        <div data-mobile={isMobile} className={styles.container}>
          {
            isMobile ? (
              <Marquee speed={150}>
                <SchemaIcon className={styles.image} />
              </Marquee>
            ) : (
                <SchemaIcon className={styles.image} />
            )
          }
       </div>
      </Wrapper>
    </section>
  )
}

export default SchemaSection