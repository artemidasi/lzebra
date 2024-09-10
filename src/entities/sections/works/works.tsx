import * as React from 'react';

import WorksImage from 'public/images/works.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';

const WorksSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper className={styles.wrapper}>
      <section data-mobile={isMobile} className={styles.section}>
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

              <div data-mobile={isMobile} className={styles.rightInfo}>
                <Title variant="h6" className={styles.rightText} uppercase>
                  No copy
                </Title>

                <Title variant="h6" className={styles.otherText} uppercase>
                  <span>No paste</span>
                </Title>

                <Title variant="h6" className={styles.rightText} uppercase>
                  Focus
                </Title>
              </div>
            </React.Fragment>
          ) : null}

          <ul data-mobile={isMobile} className={styles.list}>
            {items.map(({ icon, title, description }) => {
              return (
                <li key={title} data-mobile={isMobile} className={styles.item}>
                  {icon}

                  {isMobile ? (
                    <div className={styles.itemInfo}>
                      <Title variant="h4" className={styles.itemTitle}>
                        {title}
                      </Title>

                      <Title variant="h4" className={styles.itemDescription}>
                        {description}
                      </Title>
                    </div>
                  ) : (
                    <React.Fragment>
                      <Title variant="h4" className={styles.itemTitle}>
                        {title}
                      </Title>

                      <Title variant="h4" className={styles.itemDescription}>
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
            <div data-mobile={isMobile} className={styles.rightInfo}>
              <Title variant="h6" className={styles.rightText} uppercase>
                No copy
              </Title>

              <Title variant="h6" className={styles.otherText} uppercase>
                <span>No paste</span>
              </Title>

              <Title variant="h6" className={styles.rightText} uppercase>
                Focus
              </Title>
            </div>
          ) : null}
        </div>
      </section>
    </Wrapper>
  );
};

export default WorksSection;
