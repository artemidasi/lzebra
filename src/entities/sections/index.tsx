import * as React from 'react';

import { useIsMobile } from 'shared/hooks';

import ArtificialIntelligenceSection from './artificial-intelligence';
import BannerSection from './banner';
import ContactsSection from './contacts';
import DigitalInvestigationsSection from './digital-investigations';
import IntegrationSection from './integration';
import LogicSection from './logic';
import SimplificationSection from './simplification';
import WhomSection from './whom';
import WorksSection from './works';

const Sections: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <React.Fragment>
      <WhomSection />

      {!isMobile ? <BannerSection /> : null}

      <LogicSection />

      <WorksSection />

      <SimplificationSection />

      <ArtificialIntelligenceSection />

      <DigitalInvestigationsSection />

      <IntegrationSection />

      <ContactsSection />
    </React.Fragment>
  );
};

export default Sections;
