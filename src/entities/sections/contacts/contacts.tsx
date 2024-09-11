import * as React from 'react';

import cn from 'clsx';

import imageSrc from 'public/images/contacts.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import styles from './styles.module.scss';

const ContactsSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contacts" data-mobile={isMobile} className={styles.section}>
      <Wrapper className={styles.wrapper}>
        <Title
          variant="h4"
          className={styles.title}
          italic={!isMobile}
          uppercase>
          Сважитесь с нами, чтобы обсудить внедрение
        </Title>

        <div data-mobile={isMobile} className={styles.rows}>
          <div data-mobile={isMobile} className={cn(styles.row, styles.rowTop)}>
            <div data-mobile={isMobile} className={styles.row}>
              <Title variant="h1" className={styles.text} uppercase>
                Mail:
              </Title>

              <Title variant="h1" className={styles.text} uppercase>
                <a href="mailto:hello@LZBRa.com">hello@LZBRa.com</a>
              </Title>
            </div>

            {!isMobile ? (
              <svg
                data-mobile={isMobile}
                width="243"
                height="55"
                viewBox="0 0 243 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.837909 27.5004H238.507M238.507 27.5004L213.395 2.38867M238.507 27.5004L213.395 52.6121"
                  stroke="#191919"
                  strokeWidth="5"
                />
              </svg>
            ) : null}
          </div>

          <div data-mobile={isMobile} className={styles.row}>
            {!isMobile ? (
              <svg
                data-mobile={isMobile}
                width="516"
                height="55"
                viewBox="0 0 516 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 27.5004H511.926M511.926 27.5004L486.814 2.38867M511.926 27.5004L486.814 52.6121"
                  stroke="#191919"
                  strokeWidth="5"
                />
              </svg>
            ) : null}

            <div
              data-mobile={isMobile}
              className={cn(styles.row, styles.rowBottom)}>
              <Title variant="h1" className={styles.text} uppercase>
                Telegram:
              </Title>

              <Title
                variant="h1"
                className={cn(styles.text, styles.link)}
                uppercase>
                <a href="tg://resolve?domain=LZBRa">@LZBRa</a>
              </Title>
            </div>
          </div>
        </div>
      </Wrapper>

      <Image
        src={imageSrc}
        alt="contacts-image"
        className={cn(styles.image, 'floating')}
      />

      <Wrapper>
        <Title
          variant="h5"
          family="Golos Text"
          color="gray"
          className={styles.description}>
          Специализируемся на разработке индивидуальных решений, которые легко
          интегрируются с корпоративными процессами. Участвуем в стратегических
          партнерствах с избранными лидерами отрасли для создания инструментов,
          которые решают уникальные задачи и расширяют операционные возможности
        </Title>
      </Wrapper>
    </section>
  );
};

export default ContactsSection;
