import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions'

const initialState = {
    quiz: {},
    error: "",
    isFetching: true
  };

  export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                error: 'start failed',
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:  
            return {
                ...state,
                quiz: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload
                };
            }
        default: return state;
      }
  }