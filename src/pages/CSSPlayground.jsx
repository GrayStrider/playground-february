import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import StyledLink from '../components/StyledLink';
import develop from '../themes/develop';

const loremIpsum = require('lorem-ipsum');
const loremStatic = 'Ad sint veniam fugiat dolor est consectetur est quis velit incididunt ad. Nostrud sint sit laboris elit nulla exercitation cillum. Fugiat magna aliqua pariatur consectetur nostrud nostrud culpa enim culpa mollit duis amet. Excepteur minim nisi aute duis pariatur. Ea Lorem laborum do occaecat excepteur deserunt do anim sint culpa. Id elit anim et labore ex Lorem sint cillum aute id. Esse culpa tempor quis do ea. Reprehenderit laboris id qui elit cillum ea voluptate nostrud dolor culpa. Nisi nisi incididunt amet pariatur proident tempor ad occaecat sit dolor elit et qui. Exercitation in aute officia dolor dolore officia ut anim in qui deserunt.';

// const theme = {
//   black_thin: '1px solid black',
// };

class CssPlayground extends Component {
  render() {
    return (
      <ThemeProvider theme={develop}>
        <Wrapper>
          <LinksWrapper>
            <li><StyledLink to={'/home'}>Home</StyledLink></li>
            <li><StyledLink to={'/css'}>CSS</StyledLink></li>
          </LinksWrapper>
          <StyledContent>
            <FloatBox>
              I'm floating!<br/>
              {loremIpsum({count: 5})}
            </FloatBox>
            {loremIpsum({count: 50})}
          </StyledContent>
          <FixedBox>
            {loremIpsum({count:1})}
          </FixedBox>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.div`
  clear: left;
`;

const LinksWrapper = styled.ol`
  // removes margin top and bottom
  margin-block-start: 0;
  margin-block-end: 0;
  //position: absolute;
  //top: 20px;
  //left: 20px;
  margin: 10px;
  float: left;
  border: ${develop.black_thin};
  width: fit-content;
  padding: 3px;
  list-style: none;
  * {
    & :before {
    content: '🔸 ';
    }
  }
  
  @media (max-width: 700px) {
    float: top;
    display: inline;
    border: 2px red solid;
  }
`;
const StyledContent = styled.div`
  border: ${develop.black_thin};
  max-width: 600px;
  margin: 10px auto;
  padding: 5px;
  //column-count: 2;
`;
const Content = (content) => {
  return <StyledContent>{content}</StyledContent>
}

const FixedBox = styled.div`
  border: ${develop.black_thin};
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 200px;
  width: fit-content;
  margin: 1vh;
  padding: 5px;
`

const FloatBox = styled.div`
  border: ${develop.black_thin};
  float: right;
  margin: 0 0 1em 1em;
  width: 40%;
  padding: 5px;
  
`
export default CssPlayground;
