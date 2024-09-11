import * as React from 'react';

import { useIsMobile } from 'shared/hooks';
import { Title, Wrapper } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';

const ArtificialIntelligenceSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section data-mobile={isMobile} className={styles.section}>
      <Wrapper className={styles.wrapper}>
        <div data-mobile={isMobile} className={styles.container}>
          <Title variant="h2" uppercase>
            Обученный искуственный интеллект
          </Title>

          <ul data-mobile={isMobile} className={styles.list}>
            {items.map(({ title, description, icon }) => {
              return (
                <li key={title} data-mobile={isMobile} className={styles.item}>
                  <div>
                    {icon}

                    <Title
                      variant="h4"
                      family="Golos Text"
                      className={styles.itemTitle}>
                      {title}
                    </Title>
                  </div>

                  <hr data-mobile={isMobile} className={styles.separate} />

                  <Title
                    variant="h4"
                    family="Golos Text"
                    className={styles.itemDescription}>
                    {description}
                  </Title>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default ArtificialIntelligenceSection;
