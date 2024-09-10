import * as React from 'react';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';

const ArtificialIntelligenceSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper className={styles.wrapper}>
      <section data-mobile={isMobile} className={styles.section}>
        <Title variant="h2" uppercase>
          Обученный искуственный интеллект
        </Title>

        <ul data-mobile={isMobile} className={styles.list}>
          {items.map(({ title, description, imageSrc }) => {
            return (
              <li key={title} data-mobile={isMobile} className={styles.item}>
                <div>
                  <Image
                    src={imageSrc}
                    alt={title}
                    className={styles.itemImage}
                  />

                  <Title variant="h4" className={styles.itemTitle}>
                    {title}
                  </Title>
                </div>

                <hr data-mobile={isMobile} className={styles.separate} />

                <Title variant="h4" className={styles.itemDescription}>
                  {description}
                </Title>
              </li>
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
};

export default ArtificialIntelligenceSection;
