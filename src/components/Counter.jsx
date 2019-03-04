import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, setCounter } from '../actions/counter';
import BButton from 'react-bootstrap/Button';
import styled from 'styled-components';
import BContainer from 'react-bootstrap/Container';
import BAlert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Counter (props) {

  const setTo = (value) => setCounter.bind(null, value);
  const increment = props.increment;
  const decrement = props.decrement;
  const count = props.count;
  const setCounter = props.setCounter;

  return (
    <Container>
      <Row>
        <Col>
          <ProgressBar now={count} max={10} variant={count===10 ? 'success' : ''}/>
          <div>Counter: {count}</div>
        </Col>
      </Row>
      <Row>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={setTo(10)}>Set to 10</Button>
        <Button onClick={setTo(0)}>Reset</Button>
      </Row>
      <Row>
        {count === 0 || count === 10 ? <Alert variant="primary">0-10!</Alert> : ''}
      </Row>
    </Container>
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


const Button = styled(BButton)`
  margin: 2px;
  height: fit-content;
`

const Alert = styled(BAlert)`
  width: fit-content;
`
const Container = styled(BContainer)`

`
