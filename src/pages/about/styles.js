import styled from 'styled-components';

import { darkFontColour, Container } from '../styles';

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
    padding-bottom: 60px;
    color: ${darkFontColour};
  }
  p {
    text-align: left;
    letter-spacing: 0.4px;
    color: ${darkFontColour};
    font-size: 20px;
    line-height: 36px;
    font-weight: 300;
    padding-bottom: 35px;
  }
  @media (max-width: 1330px) {
    padding: 0 10px;
  }
`;
export { Main };
