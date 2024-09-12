import * as React from 'react';

import Fon from 'public/images/simplification.png';

import { useIsMobile } from 'shared/hooks';
import { Title, Wrapper } from 'shared/ui-kit';

import { firstList, secondList } from './const';

import styles from './styles.module.scss';

const SimplificationSection: React.FC = () => {
  const isMobile = useIsMobile();

  const sectionRef = React.useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="simplification" className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <div
          data-mobile={isMobile}
          className={styles.section}
          style={{
            backgroundImage: `url(${Fon})`,
          }}>
          <div data-mobile={isMobile} className={styles.top}>
            <Title variant="h3" className={styles.title}>
              Упрощаем перенос данных для всех сфер бизнеса и типов документов
            </Title>

            <div data-mobile={isMobile} className={styles.topDescription}>
              <Title variant="h6" family="Golos Text" color="gray" uppercase>
                Open API integration
              </Title>

              <svg
                className={styles.topIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.9998 22V18C15.1389 16.7473 14.7797 15.4901 13.9998 14.5C16.9998 14.5 19.9998 12.5 19.9998 9C20.0798 7.75 19.7298 6.52 18.9998 5.5C19.2798 4.35 19.2798 3.15 18.9998 2C18.9998 2 17.9998 2 15.9998 3.5C13.3598 3 10.6398 3 7.99979 3.5C5.99979 2 4.99979 2 4.99979 2C4.69979 3.15 4.69979 4.35 4.99979 5.5C4.27167 6.51588 3.91827 7.75279 3.99979 9C3.99979 12.5 6.99979 14.5 9.99979 14.5C9.60979 14.99 9.31979 15.55 9.14979 16.15C8.97979 16.75 8.92979 17.38 8.99979 18V22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 18C4.49 20 4 16 2 16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div data-mobile={isMobile} className={styles.bottom}>
            <ul data-mobile={isMobile} className={styles.list}>
              {firstList.map((text) => {
                return (
                  <li key={text} data-mobile={isMobile}>
                    <Title variant="h5" family="Golos Text">
                      {text}
                    </Title>
                  </li>
                );
              })}
            </ul>

            <ul data-mobile={isMobile} className={styles.list}>
              {secondList.map((text) => {
                return (
                  <li key={text} data-mobile={isMobile}>
                    <Title variant="h5" family="Golos Text">
                      {text}
                    </Title>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SimplificationSection;
