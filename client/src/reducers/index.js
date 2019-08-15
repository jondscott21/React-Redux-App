import {FETCH_ART_DATA_START, FETCH_ART_DATA_SUCCESS, FETCH_ART_DATA_FAILURE} from '../actions'

const initialState = {
    art: {},
    error: "",
    isFetching: true
  };

  export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ART_DATA_START:
            return {
                ...state,
                error: 'start failed',
                isFetching: true
            }
        case FETCH_ART_DATA_SUCCESS:  
            return {
                ...state,
                art: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_ART_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload
                };
            }
        default: return state;
      }
  }