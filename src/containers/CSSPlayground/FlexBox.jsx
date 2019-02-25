import React, { Component } from 'react';
import styled from 'styled-components';
import develop from '../../themes/develop';

const loremIpsum = require('lorem-ipsum');
const loremStatic = 'Ad sint veniam fugiat dolor est consectetur est quis velit incididunt ad. Nostrud sint sit laboris elit nulla exercitation cillum. Fugiat magna aliqua pariatur consectetur nostrud nostrud culpa enim culpa mollit duis amet. Excepteur minim nisi aute duis pariatur. Ea Lorem laborum do occaecat excepteur deserunt do anim sint culpa. Id elit anim et labore ex Lorem sint cillum aute id. Esse culpa tempor quis do ea. Reprehenderit laboris id qui elit cillum ea voluptate nostrud dolor culpa. Nisi nisi incididunt amet pariatur proident tempor ad occaecat sit dolor elit et qui. Exercitation in aute officia dolor dolore officia ut anim in qui deserunt.';

class FlexBox extends Component {
  render() {
    return (
      <Wrapper>
        {/*{Repeat(5,*/}
          {/*<Box>*/}
            {/*{loremIpsum({ count: 3 })}*/}
          {/*</Box>*/}
        {/*)}*/}

        {
          Array.from({ length: 5 }, (_, k) => (
            <Box>
              [{k+1}] {loremIpsum({ count: 3 })}
            </Box>
          ))
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  * {
    border: ${develop.black_thin};
  }
  
  // css variables do work here!
  // theming is problematic though - no IDE support
  --main: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Box = styled.div`
  max-width: 250px;
  padding: 5px;
  margin: 10px;
  background: var(--main);
`;

export default FlexBox;
