import * as Actions from '../actions';

const initialState = {
    currentStatus: false
};

const formsReducer = function(state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_FORM_STATUS:
        {
            return {
                ...state,
                currentStatus: action.formBool
            };
        }
        default:
        {
            return state;
        }
    }
}

export default formsReducer;