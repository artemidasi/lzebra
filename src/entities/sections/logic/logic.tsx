import * as React from 'react';

import cn from 'clsx';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import { items } from './const';

import styles from './styles.module.scss';
import { LogicLinesIcon } from 'shared/ui-kit/icons';

const LogicSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section data-mobile={isMobile} className={styles.section}>
      <div data-mobile={isMobile}>
        <Wrapper className={cn(styles.wrapper, styles.grid)}>
          <div data-mobile={isMobile} className={styles.texts} style={{
            gridArea: '1 / 2 / 2 / 4'
          }}>
            <Title variant="h2" className={styles.title}>
              Эль-зебра автоматизирует работу с документами и экономит тысячи
              часов
            </Title>

            <Title variant="h4" family='Golos Text' className={styles.description}>
              ИИ распознает и структурирует данные по объектам и контексту. А после поможет создавать новые отчеты и таблицы. Как хороший помощник – обучится формату ваших документов и заполнитнужными данными
            </Title>
          </div>
        </Wrapper>
      </div>

      <div data-mobile={isMobile} className={styles.grid}>
        <LogicLinesIcon
          className={styles.image}
        />
      </div>

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
                      family='Golos Text'
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
                                family='Golos Text'
                                color='gray'
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
                      family='Golos Text'
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
                                family='Golos Text'
                                color='gray'
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
