import styled from 'styled-components';

const mainFontColour = '#DFDFDF';
const darkFontColour = '#3D3D3D';
const secondaryColour = '#FDD000';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 320px;
  color: ${mainFontColour};
`;

export { mainFontColour, darkFontColour, secondaryColour, Container };
