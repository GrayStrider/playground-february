import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import StyledLink from '../../components/StyledLink';

const loremIpsum = require('lorem-ipsum');
const loremStatic = 'Ad sint veniam fugiat dolor est consectetur est quis velit incididunt ad. Nostrud sint sit laboris elit nulla exercitation cillum. Fugiat magna aliqua pariatur consectetur nostrud nostrud culpa enim culpa mollit duis amet. Excepteur minim nisi aute duis pariatur. Ea Lorem laborum do occaecat excepteur deserunt do anim sint culpa. Id elit anim et labore ex Lorem sint cillum aute id. Esse culpa tempor quis do ea. Reprehenderit laboris id qui elit cillum ea voluptate nostrud dolor culpa. Nisi nisi incididunt amet pariatur proident tempor ad occaecat sit dolor elit et qui. Exercitation in aute officia dolor dolore officia ut anim in qui deserunt.';

const theme = {
  black_thin: '1px solid black',
};

class CssPlayground extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <LinksWrapper>
            <li><StyledLink to={'/home'}>Home</StyledLink></li>
            <li><StyledLink to={'/css'}>CSS</StyledLink></li>
          </LinksWrapper>
          {Content(loremStatic)}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.div`

`;

const LinksWrapper = styled.ol`
  border: ${theme.black_thin};
  width: fit-content;
  padding: 3px;
  margin: 1vh;
  list-style: none;
  * {
    & :before {
    content: '🔸 ';
    }
  }
`;
const StyledContent = styled.div`
  border: ${theme.black_thin};
  max-width: 600px;
  margin: auto;
  padding: 5px;
`;
const Content = (content) => {
  return <StyledContent>{content}</StyledContent>
}
export default CssPlayground;
