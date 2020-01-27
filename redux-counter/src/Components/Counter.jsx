import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, ifEven, ifOdd, incAsync  } from '../Store/actionTypes';


const Counter = (props) => {
    const handleIncrement = (e) => {
        props.increment()
    }
    const handleDecrement = (e) => {
        props.decrement()
    }
    const handleIfEven = (e) => {
        props.ifEven()
    }
    const handleIfOdd = (e) => {
        props.ifOdd()
    }
    const handleIncAsync = (e) => {
        setTimeout(() => { props.incAsync() }, 1000)
    }
    return(
        <div>
            <p>{props.counter}</p>
            <button onClick={handleIncrement}>Plus</button>
            <button onClick={handleDecrement}>Minus</button>
            <button onClick={handleIfEven}>if even</button>
            <button onClick={handleIfOdd}>if odd</button>
            <button onClick={handleIncAsync}>async</button>
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
        },
        ifEven: () => {
            console.log('ifEven called')
            dispatch({
                type: ifEven
            })
        },
        ifOdd: () => {
            console.log('ifOdd called')
            dispatch({
                type: ifOdd
            })
        },
        incAsync: () => {
            console.log('incAsync called')
            dispatch({
                type: incAsync
            })
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Counter);