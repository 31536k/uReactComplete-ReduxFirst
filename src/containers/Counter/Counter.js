import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(storeResult => (
                        <li key={storeResult.id} onClick={() => this.props.onDeleteResult(storeResult.id)}>{storeResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// state from reducer. map it to props.ctr
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.results
    };
}

// props.onIncrementCounter 를 실행하면 dispatch 가 실행되도록 연결한다.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);