import React from 'react';
import { Row, Col } from 'react-bootstrap';
import i18n from '../../../i18n';
import { Scrollbars } from 'react-custom-scrollbars';

import CovidCases from 'src/routes/dashboard/landing/covidCases';
import HospitalCapacity from 'src/routes/dashboard/landing/hospitalCapacity';
import TestingInformation from 'src/routes/dashboard/landing/testingInfo';
import LatestNews from './latestNews';

const Landing = () => (
  <>
    <div className="container-fluid mt-3">
      <Row>
        <CovidCases />

        <TestingInformation />

        <Col md="12" lg="3" className="mt-2 order-lg-first">
          <Scrollbars>
            {/* <div className="tweet-wrapper"> */}
            <LatestNews />
            {/* </div> */}
          </Scrollbars>
        </Col>
      </Row>
      <HospitalCapacity />
    </div>
  </>
);

export default Landing;