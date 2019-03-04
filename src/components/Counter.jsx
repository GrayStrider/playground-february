import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, setCounter } from '../actions/counter';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Counter ({
                    count,
                    increment,
                    decrement,
                    setCounter,
                  }) {
  const setTo = (value) => setCounter.bind(null, value);
  return (
    <SContainer>
      <Row>
        <Col>
          <ProgressBar now={count} max={10} variant={count===10 ? 'success' : ''}/>
          <div>Counter: {count}</div>
        </Col>
      </Row>
      <Row>
        <StyledButton onClick={increment}>+</StyledButton>
        <StyledButton onClick={decrement}>-</StyledButton>
        <StyledButton onClick={setTo(10)}>Set to 10</StyledButton>
        <StyledButton onClick={setTo(0)}>Reset</StyledButton>
      </Row>
      <Row>
        {count === 0 || count === 10 ? <StyledAlert variant="primary">0-10!</StyledAlert> : ''}
      </Row>
    </SContainer>
  );
}

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  setCounter: (value) => dispatch(setCounter(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


const StyledButton = styled(Button)`
  margin: 2px;
  height: fit-content;
`

const StyledAlert = styled(Alert)`
  width: fit-content;
`
const SContainer = styled(Container)`

`
