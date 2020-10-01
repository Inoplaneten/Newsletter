import { GET_NEWS_BEGIN, GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from './actionTypes';

export const getNewsBegin = () => ({
    type: GET_NEWS_BEGIN,
});

export const getNewsSuccess = data => ({
    type: GET_NEWS_SUCCESS,
    payload: data
});

export const getNewsFailure= () => ({
    type: GET_NEWS_FAILURE,
});