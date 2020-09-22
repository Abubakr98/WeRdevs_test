import React from 'react';
import styled from 'styled-components';

import { darkFontColour, Container } from '../styles';
import Layout from '../layout';

const Main = styled(Container)`
  justify-content: flex-start;
  max-width: 1336px;
  margin: 0 auto;
  padding-top: 50px;
  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 34px;
    letter-spacing: -0.68px;
    padding-bottom: 70px;
    color: ${darkFontColour};
  }
  p {
    text-align: left;
    letter-spacing: 0.4px;
    color: ${darkFontColour};
    font-size: 20px;
    line-height: 36px;
    font-weight: 300;
  }
`;

const About = () => {
  return (
    <Layout>
      <Main>
        <h1>Lorem ipsum creation timelines</h1>
        <p>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book.
        </p>
        <br />
        <br />
        <p>
          It's difficult to find examples of lorem ipsum in use before Letraset
          made it popular as a dummy text in the 1960s, although McClintock says
          he remembers coming across the lorem ipsum passage in a book of old
          metal type samples. So far he hasn't relocated where he once saw the
          passage, but the popularity of Cicero in the 15th century supports the
          theory that the filler text has been used for centuries.
        </p>
        <br />
        <br />
        <p>
          And anyways, as Cecil Adams reasoned, “[Do you really] think graphic
          arts supply houses were hiring classics scholars in the 1960s?”
          Perhaps. But it seems reasonable to imagine that there was a version
          in use far before the age of Letraset.
          <br />
          <br />

        </p>
        
        <p>McClintock wrote to Before & After to explain his discovery;</p>
        <p>
          “What I find remarkable is that this text has been the industry's
          standard dummy text ever since some printer in the 1500s took a galley
          of type and scrambled it to make a type specimen book; it has survived
          not only four centuries of letter-by-letter resetting but even the
          leap into electronic typesetting, essentially unchanged except for an
          occasional 'ing' or 'y' thrown in. It's ironic that when the
          then-understood Latin was scrambled, it became as incomprehensible as
          Greek; the phrase 'it's Greek to me' and 'greeking' have common
          semantic roots!” (The editors published his letter in a correction
          headlined “Lorem Oopsum”).
        </p>
      </Main>
    </Layout>
  );
};

export default About;
