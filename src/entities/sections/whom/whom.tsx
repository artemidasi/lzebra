import * as React from 'react';

import { useIsMobile } from 'shared/hooks';
import { Title, Wrapper } from 'shared/ui-kit';
import { BannerImage } from 'shared/ui-kit/images';

import styles from './styles.module.scss';

const WhomSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? <BannerImage /> : null}

      <Wrapper className={styles.wrapper}>
        <section data-mobile={isMobile} className={styles.section}>
          <div data-mobile={isMobile} className={styles.left}>
            <Title variant="h5" color="gray" className={styles.text}>
              Эль-Зебра / ɛl ˈzɛbrə / El-Zebra
            </Title>

            {!isMobile ? (
              <svg
                data-mobile={isMobile}
                className={styles.icon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 4.70203C10.9998 4.56274 10.9583 4.42663 10.8809 4.31088C10.8034 4.19514 10.6934 4.10493 10.5647 4.05166C10.436 3.99838 10.2944 3.98442 10.1577 4.01154C10.0211 4.03866 9.89559 4.10564 9.797 4.20403L6.413 7.58703C6.2824 7.7184 6.12703 7.82256 5.95589 7.89345C5.78475 7.96435 5.60124 8.00057 5.416 8.00003H3C2.73478 8.00003 2.48043 8.10539 2.29289 8.29292C2.10536 8.48046 2 8.73481 2 9.00003V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8947 2.73478 16 3 16H5.416C5.60124 15.9995 5.78475 16.0357 5.95589 16.1066C6.12703 16.1775 6.2824 16.2817 6.413 16.413L9.796 19.797C9.8946 19.8958 10.0203 19.9631 10.1572 19.9904C10.2941 20.0177 10.436 20.0037 10.5649 19.9503C10.6939 19.8968 10.804 19.8063 10.8815 19.6902C10.959 19.5741 11.0002 19.4376 11 19.298V4.70203Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 9C16.6491 9.86548 17 10.9181 17 12C17 13.0819 16.6491 14.1345 16 15"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.3638 18.364C20.1995 17.5283 20.8625 16.5361 21.3148 15.4442C21.7671 14.3522 21.9998 13.1819 21.9998 12C21.9998 10.8181 21.7671 9.64775 21.3148 8.55581C20.8625 7.46387 20.1995 6.47172 19.3638 5.63599"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </div>

          {isMobile ? (
            <Title variant="h4" weight={600} className={styles.description}>
              Вытащим данные из документов и загрузим в excel / CRM / ERP / базу
              данных
            </Title>
          ) : (
            <Title variant="h5" color="gray" className={styles.text}>
              Менеджерам / Бухгалтерам / Аналитикам / Мне
            </Title>
          )}
        </section>
      </Wrapper>
    </div>
  );
};

export default WhomSection;
