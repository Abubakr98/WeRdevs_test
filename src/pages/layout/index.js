import React from 'react';
import styled from 'styled-components';

import Header from './components/header';

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  min-height: 1080px;
`;
