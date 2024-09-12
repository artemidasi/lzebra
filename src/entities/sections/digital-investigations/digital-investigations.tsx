import * as React from 'react';

import imageSrc from 'public/images/digital-investigations.png';
import imageMobileSrc from 'public/images/digital-investigations-mobile.png';

import { useIsMobile } from 'shared/hooks';
import { Image, Title, Wrapper } from 'shared/ui-kit';

import styles from './styles.module.scss';

const DigitalInvestigationsSection: React.FC = () => {
  const isMobile = useIsMobile();

  const sectionRef = React.useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} data-mobile={isMobile} className={styles.section}>
      <Wrapper className={styles.wrapper}>
        <div data-mobile={isMobile} className={styles.container}>
          <Image
            src={isMobile ? imageMobileSrc : imageSrc}
            alt="digital-investigations-image"
            className={styles.image}
          />

          <div data-mobile={isMobile} className={styles.bottom}>
            <Title variant="h2" uppercase>
              Цифровые
              <br />
              расследования
            </Title>

            <div data-mobile={isMobile} className={styles.lists}>
              <Title variant="h4" family="Golos Text" className={styles.text}>
                Иногда отчеты не сходятся из-за ошибок в первичных данных.
                Эль-Зебра помнит все связи. Вы легко сможете провести
                расследование и отследить путь к источнику данных
              </Title>

              <Title variant="h4" family="Golos Text" className={styles.text}>
                Поможет найти и разрешить конфликты, когда в разных документах
                содержится противоречивая информация. Не пропускайте
                несостыковки, а разбирайтесь с ними
              </Title>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default DigitalInvestigationsSection;
