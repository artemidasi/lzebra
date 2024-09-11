import * as React from 'react';

import { useIsMobile } from 'shared/hooks';
import { Title } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';

const List: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <ul data-mobile={isMobile} className={styles.list}>
      {items.map((text) => {
        return (
          <li key={text} data-mobile={isMobile} className={styles.item}>
            <Title
              variant="h6"
              family="Golos Text"
              color="gray"
              className={styles.text}
              uppercase>
              {text}
            </Title>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
