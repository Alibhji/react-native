import { DECREASE_COUNTER, INCREASE_COUNTER } from "../actions/count";


const initialState = {
    count: 0,
    name: ''
};

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return (  {...state , count: state.count + action.payload} );

        case DECREASE_COUNTER:
            return (  {...state , count: state.count - action.payload} );
        
        default: return state;
    }
}

export default countReducer;