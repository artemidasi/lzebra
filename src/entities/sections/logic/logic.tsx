import * as React from 'react';

import LinesImage from 'public/images/lines.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';

const LogicSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section data-mobile={isMobile} className={styles.section}>
      <Wrapper className={styles.wrapper}>
        <div data-mobile={isMobile}>
          <Title variant="h2" className={styles.title}>
            Эль-зебра автоматизирует работу с документами и экономит тысячи
            часов
          </Title>

          <Title variant="h4" weight={600} className={styles.description}>
            Цифровой помощник обучится на ваших документах, извлечет из них
            данные и перенесет в систему учета / таблицу / маркетинговый отчет /
            коммерческое предложение
          </Title>
        </div>
      </Wrapper>

      <Image className={styles.image} src={LinesImage} alt="lines-image" />

      <Wrapper className={styles.wrapper}>
        <ul data-mobile={isMobile} className={styles.list}>
          {items.map(({ iconSrc, title, description, files, maxWidth }) => {
            return (
              <li data-mobile={isMobile} key={title} className={styles.item}>
                <div data-mobile={isMobile} className={styles.itemLeft}>
                  {!isMobile ? (
                    <Title variant="h3" className={styles.itemTitle} uppercase>
                      {title}
                    </Title>
                  ) : null}

                  <Image
                    className={styles.itemImage}
                    style={{
                      ...(isMobile
                        ? {
                            width: maxWidth.mobile,
                          }
                        : {
                            width: maxWidth.desktop,
                          }),
                    }}
                    src={iconSrc}
                    alt={`${title}-icon`}
                  />
                </div>

                {isMobile ? (
                  <div>
                    <Title variant="h3" className={styles.itemTitle} uppercase>
                      {title}
                    </Title>

                    <Title
                      data-mobile={isMobile}
                      variant="h5"
                      weight={500}
                      className={styles.itemDescription}>
                      {description}
                    </Title>

                    <div data-mobile={isMobile}>
                      <ul data-mobile={isMobile} className={styles.formats}>
                        {files.map(({ icon, title }) => {
                          return (
                            <li
                              data-mobile={isMobile}
                              key={title}
                              className={styles.formatsItem}>
                              {icon}

                              <Title
                                variant="h6"
                                className={styles.formatsTitle}
                                uppercase>
                                {title}
                              </Title>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <React.Fragment>
                    <Title
                      variant="h5"
                      weight={500}
                      className={styles.itemDescription}>
                      {description}
                    </Title>

                    <div>
                      <ul className={styles.formats}>
                        {files.map(({ icon, title }) => {
                          return (
                            <li key={title} className={styles.formatsItem}>
                              {icon}

                              <Title
                                variant="h6"
                                className={styles.formatsTitle}
                                uppercase>
                                {title}
                              </Title>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </React.Fragment>
                )}
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
};

export default LogicSection;
