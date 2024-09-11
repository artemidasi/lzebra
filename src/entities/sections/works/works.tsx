import * as React from 'react';

import WorksImage from 'public/images/works.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';
import LineText from './line-text';

const WorksSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section data-mobile={isMobile} className={styles.section}>
      <Wrapper className={styles.wrapper}>
        <div data-mobile={isMobile} className={styles.container}>
          <div data-mobile={isMobile} className={styles.left}>
            <Title variant="h2" className={styles.title} uppercase>
              Работайте с удовольствием
            </Title>

            <Title variant="h3" className={styles.description} italic>
              Можно фокусироваться на важном, а не тратить время на перенос данных
              вручную
            </Title>

            {isMobile ? (
              <React.Fragment>
                <Image
                  src={WorksImage}
                  alt="works-image"
                  className={styles.image}
                />

                <LineText />
              </React.Fragment>
            ) : null}

            <ul data-mobile={isMobile} className={styles.list}>
              {items.map(({ icon, title, description }) => {
                return (
                  <li key={title} data-mobile={isMobile} className={styles.item}>
                    {icon}

                    {isMobile ? (
                      <div className={styles.itemInfo}>
                        <Title variant="h4" family='Golos Text' className={styles.itemTitle}>
                          {title}
                        </Title>

                        <Title variant="h4" family='Golos Text' className={styles.itemDescription}>
                          {description}
                        </Title>
                      </div>
                    ) : (
                      <React.Fragment>
                        <Title variant="h4" family='Golos Text' className={styles.itemTitle}>
                          {title}
                        </Title>

                        <Title variant="h4" family='Golos Text' className={styles.itemDescription}>
                          {description}
                        </Title>
                      </React.Fragment>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div data-mobile={isMobile} className={styles.right}>
            {!isMobile ? (
              <Image
                src={WorksImage}
                alt="works-image"
                className={styles.image}
              />
            ) : null}

            {!isMobile ? (
              <LineText />
            ) : null}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WorksSection;
