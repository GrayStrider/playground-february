import React, { Component } from 'react';
import styled from 'styled-components';
import develop from '../themes/develop';

const loremIpsum = require('lorem-ipsum');
const loremStatic = 'Ad sint veniam fugiat dolor est consectetur est quis velit incididunt ad. Nostrud sint sit laboris elit nulla exercitation cillum. Fugiat magna aliqua pariatur consectetur nostrud nostrud culpa enim culpa mollit duis amet. Excepteur minim nisi aute duis pariatur. Ea Lorem laborum do occaecat excepteur deserunt do anim sint culpa. Id elit anim et labore ex Lorem sint cillum aute id. Esse culpa tempor quis do ea. Reprehenderit laboris id qui elit cillum ea voluptate nostrud dolor culpa. Nisi nisi incididunt amet pariatur proident tempor ad occaecat sit dolor elit et qui. Exercitation in aute officia dolor dolore officia ut anim in qui deserunt.';

class FlexBox extends Component {
  render() {
    return (

      <Wrapper>
        <Navigation>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>My Work</NavLink>
        </Navigation>
        <ContentWrapper>
          {
            Array.from({ length: 10 }, (_, k) => (
              <Box key={k+1}>
                [{k + 1}] {loremIpsum({ count: 3 })}
              </Box>
            ))
          }
        </ContentWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  * {
    border: ${develop.black_thin};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  //height: 100vh; // this way column wrap works.
  justify-content: space-around;
  align-items: normal;
  align-content: center;
`;

const Navigation = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;
  
  @media all and (max-width: 800px) {
  & {
    /* When on medium sized screens, we center it by evenly distributing empty space around items */
    justify-content: space-around;
  }
  
  @media all and (max-width: 500px) {
  & {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
    align-content: center;
  }
`;

const NavLink = styled.div`
  padding: 3px;
  border: none;
`

const Box = styled.div`
  width: calc(98vw / 4);
  //flex-basis: calc(100vw / 4);
  //margin: 5px;
  padding: 6px;
  
  box-shadow: 4px 7px 45px -10px rgba(0,0,0,0.4);
  border-radius: 3px;
  
  
`;

export default FlexBox;
