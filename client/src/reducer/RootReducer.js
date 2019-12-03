import {POST_OPTION} from '../action/types';

const initalState = {
    dropdownOptions: []
}

export default (state = initalState, action) => {
    switch(action.type) {
        case POST_OPTION:
            return {
                ...state,
                dropdownOptions: [action.payload]
            }
    
        default:
            return state;
    }
}