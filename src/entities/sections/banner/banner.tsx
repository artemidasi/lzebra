import * as React from 'react';

import { projectName } from 'shared/const';
import { useIsMobile } from 'shared/hooks';
import { Title, Wrapper } from 'shared/ui-kit';
import { BannerImage } from 'shared/ui-kit/images';

import styles from './styles.module.scss';

const BannerSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper className={styles.wrapper}>
      <section data-mobile={isMobile} className={styles.section}>
        <div data-mobile={isMobile} className={styles.top}>
          <Title variant="h1" className={styles.title}>
            {projectName}
          </Title>

          <Title variant="h4" weight={600} className={styles.description}>
            Вытащим данные из документов и загрузим в excel / CRM / ERP / базу
            данных
          </Title>
        </div>

        <BannerImage />
      </section>
    </Wrapper>
  );
};

export default BannerSection;
