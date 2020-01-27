import { INCREMENT, DECREMENT, ifEven, ifOdd, incAsync } from '../actionTypes'

const initialState = {
    counter: 1
}

// initialState is substituted if no state is specified
const counterReducer = (state = initialState, action) => {
    console.log('counter reducer is now running...',  action)
    // use spread operator to make a copy of the current state
    const stateCopy = { ...state }

    switch(action.type) {
        // cases and default
        case INCREMENT:
            stateCopy.counter++
            break;

        case DECREMENT:
            stateCopy.counter-- 
            break;

        case ifEven:
            if(stateCopy.counter % 2 === 0) {
                stateCopy.counter++
            }
            break;

        case ifOdd:
            if(stateCopy.counter % 2 !== 0) {
                stateCopy.counter++
            }
            break;

        case incAsync:
            stateCopy.counter++
            break;

        default:
            return stateCopy
    }
    return stateCopy
}

export default counterReducer;