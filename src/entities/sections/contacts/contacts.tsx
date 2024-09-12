import * as React from 'react';

import { useWindowSize } from '@reactuses/core';
import cn from 'clsx';

import arrowLeftSrc from 'public/images/arrow-left.png';
import arrowRightSrc from 'public/images/arrow-right.png';
import imageSrc from 'public/images/contacts.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import styles from './styles.module.scss';

const ContactsSection: React.FC = () => {
  const isMobile = useIsMobile();

  const { width } = useWindowSize();

  const actualWidth = (width * 238) / 1920;

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
            <Image
              style={{
                width: `${actualWidth}px`,
              }}
              className={styles.arrow}
              src={arrowRightSrc}
              alt="arrow-right"
            />

            <div
              data-mobile={isMobile}
              className={cn(styles.row, styles.rowText)}>
              <Title variant="h1" className={styles.text} uppercase>
                Mail:
              </Title>

              <Title variant="h1" className={styles.text} uppercase>
                <a href="mailto:hello@LZBRa.com">hello@LZBRa.com</a>
              </Title>
            </div>

            <Image
              style={{
                width: `${actualWidth}px`,
              }}
              className={styles.arrow}
              src={arrowLeftSrc}
              alt="arrow-left"
            />
          </div>

          <div
            data-mobile={isMobile}
            className={cn(styles.row, styles.rowBottom)}>
            <Image
              style={{
                width: `${actualWidth}px`,
              }}
              className={styles.arrow}
              src={arrowRightSrc}
              alt="arrow-right"
            />

            <div
              data-mobile={isMobile}
              className={cn(styles.row, styles.rowText)}>
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

            <Image
              style={{
                width: `${actualWidth}px`,
              }}
              className={styles.arrow}
              src={arrowLeftSrc}
              alt="arrow-left"
            />
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
