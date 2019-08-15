import axios from 'axios';

export const FETCH_ART_DATA_START = 'FETCH_WEBCAM_DATA_START';
export const FETCH_ART_DATA_SUCCESS = 'FETCH_WEBCAM_DATA_SUCCESS';
export const FETCH_ART_DATA_FAILURE = 'FETCH_WEBCAM_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_ART_DATA_START });
    axios
      .get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/1`)
      .then(res => {
        dispatch({ type: FETCH_ART_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_ART_DATA_FAILURE, payload: err.response });
      });
  };
};