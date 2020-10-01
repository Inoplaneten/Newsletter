import { GET_NEWS_BEGIN, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from "./actionTypes";

const initialState = {
    news: [],
    isLoading: false,
    isError: false
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWS_BEGIN:
            return {
                ...state,
                isLoading: true
            };
        case GET_NEWS_SUCCESS: 
            return {
                ...state,
                news: action.payload,
                isLoading: false
            };
        case GET_NEWS_FAILURE : 
            return {
                ...state,
                isError: true
            };        
        default : 
            return state
    };
};

export { mainReducer };