import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
} from './redux/Counter/counter.actions';

import { counter, getCount, getData, pa, bp } from './redux/selector';

function App(props) {
  return (
    <div className='App'>
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>

      <div>{JSON.stringify(props)}</div>
      <div>Bonus: {props.pa * props.bp}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: counter(state),
    count: getCount(state),
    data: getData(state),
    pa: pa(state),
    bp: bp(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
