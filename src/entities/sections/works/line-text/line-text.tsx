import * as React from 'react';

import { useIsMobile } from 'shared/hooks';
import { Title } from 'shared/ui-kit';

import styles from './styles.module.scss';

const LineText: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div data-mobile={isMobile} className={styles.container}>
      <Title
        variant="h6"
        family="Golos Text"
        color="gray"
        className={styles.text}
        uppercase>
        No copy
      </Title>

      <Title
        variant="h6"
        family="Golos Text"
        color="gray"
        className={styles.otherText}
        uppercase>
        <span>No paste</span>
      </Title>

      <Title
        variant="h6"
        family="Golos Text"
        color="gray"
        className={styles.text}
        uppercase>
        Focus
      </Title>
    </div>
  );
};

export default LineText;
