import * as React from 'react';

import { useIsMobile } from 'shared/hooks';
import { Title } from 'shared/ui-kit';
import { IntegrationLinesIcon } from 'shared/ui-kit/icons';

import List from './list';

import styles from './styles.module.scss';

const IntegrationSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div data-mobile={isMobile} className={styles.wrapper}>
      {isMobile ? <div data-mobile={isMobile} className={styles.fon} /> : null}

      <section data-mobile={isMobile} className={styles.section}>
        {/* <Image
          src={isMobile ? imageMobileSrc : imageSrc}
          alt="integration"
          className={styles.image}
        /> */}

        <IntegrationLinesIcon className={styles.image} />

        <div data-mobile={isMobile} className={styles.information}>
          <Title variant="h4" family="Golos Text" className={styles.title}>
            Эль-Зебра встраивается не меняя существующие бизнес-процессы.
            Мы занимаемся интеграцией поверх имеющейся инфраструктуры
          </Title>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
            data-mobile={isMobile}>
            <List />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationSection;
