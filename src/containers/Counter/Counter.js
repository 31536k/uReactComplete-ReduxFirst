import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 8" clicked={this.props.onSubCounter}  />
            </div>
        );
    }
}

// state from reducer. map it to props.ctr
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

// props.onIncrementCounter 를 실행하면 dispatch 가 실행되도록 연결한다.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubCounter: () => dispatch({type: 'SUBTRACT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);