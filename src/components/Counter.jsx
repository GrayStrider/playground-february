import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setCounter } from '../actions/counter';
import BButton from 'react-bootstrap/Button';
import styled from 'styled-components';
import BContainer from 'react-bootstrap/Container';
import BAlert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ContactForm from './ContactForm';
import { Form } from 'redux-form';
import { Link } from 'react-router-dom';

function Counter(props) {

  const setTo = (value) => setCounter.bind(null, value);
  const increment = props.increment;
  const decrement = props.decrement;
  const count = props.count;
  const setCounter = props.setCounter;

  const fakeData = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
  };

  const fakeArray = ['false', 'Ivan', 'sand', 10, 5345];

  const ifOdd = () => {
    if (count % 2 === 0) {
      return;
    }
    increment();
  };

  const incrementAsync = () => setTimeout(increment, 1000);

  const incrementNtimesAsync = (amount) => {
    for (let i = 0; i < amount; i++) {
      incrementAsync();
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <ProgressBar now={count} max={10}
                       variant={count === 10 ? 'success' : ''}/>
          <div>Counter: {count}</div>
        </Col>
      </Row>
      <Row>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={setTo(10)}>Set to 10</Button>
        <Button onClick={setTo(0)}>Reset</Button>
        <Button onClick={() => count % 2 === 0 ? null : increment()}>Increment if odd</Button>
      </Row>
      <Row>
        {/*<Button onClick={increment}>Increment if {count % 2 === 0 ? 'even' : 'odd'}</Button>*/}
        <Button onClick={incrementAsync}>Async</Button>
        <>
          <input type='range' min={1} max={10} id='myRange'
                 onChange={(event) => setCounter(Number(event.currentTarget.value))}/>
        </>
      </Row>
      <Row>
        <form onSubmit={(event) => {
          event.preventDefault();
          incrementNtimesAsync(Number(document.getElementById('asyncForm').value))
        }}>
          <input type='text' min={0} max={10 - count} id='asyncForm'/>
          <input type='submit'/>
        </form>
      </Row>
      <Row>
        {
          count === 0 || count === 10 ?
            <Alert variant='primary'>0-10!</Alert>
            : ''}
      </Row>
      <ContactForm/>
      <hr/>
      <p>Iterate over object:</p>
      {Object.keys(fakeData).map(
        (key) => (
          <div key={key}>{key}: {fakeData[key]}</div>
        ))}
      <hr/>
      <p>Iterate over array, escaping &lt; and &gt;:</p>
      {fakeArray.map((value, i) => (
        <div key={i} id='fakeEntry'>index: {i}, value: &lt; {value} &gt;</div>
      ))}
      <hr/>
      <p>Array 1..N</p>
      {Array.from({ length: count }, (v, k) => k + 1)
        .map((value, i) => (
          <div key={i} id='fakeEntry'>index: {i}, value: &lt; {value} &gt;</div>
        ))}
      <hr/>
      <Link to={'/home'}>Go Home</Link>

    </Container>
  );
}

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  setCounter: (value) => dispatch(setCounter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


const Button = styled(BButton)`
  margin: 2px;
  height: fit-content;
`;

const Alert = styled(BAlert)`
  width: fit-content;
  position: absolute;
  right: 20px;
  bottom: 30px;
`;
const Container = styled(BContainer)`
  //padding-left: calc(100vw - 100%); margin seems to do the trick
  margin-left: 2em;
  padding: 0;
  & div#fakeEntry {
    :nth-child(even){
    background-color: antiquewhite;
}
  }

  & > p {
  background-color: antiquewhite;
}

`;
