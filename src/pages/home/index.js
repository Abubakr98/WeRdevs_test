import React, { lazy } from 'react';
import styled from 'styled-components';

import { secondaryColour, Container } from '../styles';
import Layout from '../layout';
import bg from '../../img/main_bg.jpg';
import Calendar from './calendar/index';
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
const SectionTwo = styled.div`
  width: 705px;
  min-width: 320px;
  height: 100%;
  display: flex;
  padding-top: 200px;
  justify-content: center;
  background-color: #272829;
  padding: 210px 0;
  @media (max-width: 1250px) {
    padding: 50px 0;
    width: 100%;
  }
  & > .calendar {
    max-width: 467px;
    height: auto;
  }
`;

const Main = styled(Container)`
  justify-content: flex-end;
  background-image: url(${bg});
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 1430px) {
    background-size: cover;
  }
`;
const SectionOne = styled.div`
  padding-top: 200px;
  padding: 210px 0;
  @media (max-width: 1250px) {
    padding: 50px 0;
    width: 100%;
  }
`;
const Text = styled.div`
  text-align: right;
  padding-right: 30px;
  h1 {
    font-size: 50px;
    letter-spacing: 3.5px;
    line-height: 64px;
    font-weight: 700;
    color: ${secondaryColour};
    text-transform: uppercase;
    padding-bottom: 30px;
  }
  p {
    font-size: 30px;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: 0.6px;
    color: #dfdfdf;
  }
`;
