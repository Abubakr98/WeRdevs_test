import React, { lazy } from 'react';

import Layout from '../layout';
import Calendar from './calendar/index';
import { SectionTwo, Main, SectionOne, Text } from './styles';

const Modal = lazy(() => import('./modal'));

const Home = () => {
  return (
    <Layout>
      <Main>
        <SectionOne>
          <Text>
            <h1>
              Choose the day <br /> for the meeting
            </h1>
            <p>
              We encourage you to book your
              <br /> appointment online.
              <br /> This will save you time.
            </p>
          </Text>
        </SectionOne>
        <SectionTwo>
          <Calendar />
        </SectionTwo>
      </Main>
      <Modal />
    </Layout>
  );
};
export default Home;
