import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions'
import * as actionCreators from '../../store/actions/actions'

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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
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
        ctr: state.ctr.counter, // state 는 Reducer. index.js 에서 counterReducer. counterReducer.counter 를 ctr 에 mapping 
        storeResults: state.res.results // resultReducer.results 를 storeResults에 mapping
    };
}

// props.onIncrementCounter 를 실행하면 dispatch 가 실행 => actionType 를 받는 reducer 에서 코드가 실행되고 다시 mapStateToProps 에 의해서 storeResults props 값이 바뀌어서 render 가 호출된다.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubCounter: () => dispatch(actionCreators.substract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);