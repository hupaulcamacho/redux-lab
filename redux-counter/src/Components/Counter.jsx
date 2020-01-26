import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../Store/actionTypes';


const Counter = (props) => {
    const counter = 1

    const handleIncrement = (e) => {
        props.increment()
    }

    const handleDecrement = (e) => {
        props.decrement()
    }

    return(
        <div>
            <p>{props.counter}</p>
            <button onClick={handleIncrement}>Plus</button>
            <button onClick={handleDecrement}>Minus</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { 
            console.log('increment called')
            dispatch({
                type: INCREMENT
            }) 
        },
        decrement: () => {
            console.log('decrement called')
            dispatch({
                type: DECREMENT
            })
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Counter);