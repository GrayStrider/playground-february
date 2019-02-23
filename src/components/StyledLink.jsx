import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: #103ba4;
  margin-right: 1em;
  text-decoration:none;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    bottom: 1px;
    border-bottom: 1px solid #eaeaea;
    transition: ease 0.3s;
  }
  &:hover {
    color: #00c2ff;
    &:after {
      bottom: 0;
      border-bottom: 2px solid #b1f7ff;
    }
  }
`

export default StyledLink;
