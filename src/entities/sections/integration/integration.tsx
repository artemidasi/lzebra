import * as React from 'react';

import imageSrc from 'public/images/integration-lines.png';
import imageMobileSrc from 'public/images/integration-lines-mobile.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title } from 'shared/ui-kit';

import styles from './styles.module.scss';

const IntegrationSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div data-mobile={isMobile} className={styles.wrapper}>
      {isMobile ? <div data-mobile={isMobile} className={styles.fon} /> : null}

      <section data-mobile={isMobile} className={styles.section}>
        <Image
          src={isMobile ? imageMobileSrc : imageSrc}
          alt="integration"
          className={styles.image}
        />

        <div data-mobile={isMobile} className={styles.information}>
          <Title variant="h4" className={styles.title}>
            Эль-Зебра встраивается не меняя существующие бизнес-процессы.
            Мы занимаемся интеграцией поверх имеющейся инфраструктуры
          </Title>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
            data-mobile={isMobile}>
            <ul data-mobile={isMobile} className={styles.list}>
              <li data-mobile={isMobile} className={styles.item}>
                <Title variant="h6" className={styles.itemTitle} uppercase>
                  Открытый API
                </Title>
              </li>

              <li data-mobile={isMobile} className={styles.item}>
                <Title variant="h6" className={styles.itemTitle} uppercase>
                  Web-приложение
                </Title>
              </li>

              <li data-mobile={isMobile} className={styles.item}>
                <Title variant="h6" className={styles.itemTitle} uppercase>
                  Почтовые сервисы
                </Title>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationSection;
