import {combineReducers} from 'redux';
import * as types from '../constants/actionTypes';

const defaultArticle = {
    _id: '',
    text: '',
    tags: []
}

const article = (state = defaultArticle, action) => {
    switch(action.type) {
        case types.FETCH_ARTICLE_SUCCESS:
        case types.UPDATE_ARTICLE_SUCCESS:
            return action.article.data;

        default: 
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch(action.type) {
        case types.FETCH_ARTICLE_REQUEST:
        case types.UPDATE_ARTICLE_REQUEST:
            return true;
        
        case types.FETCH_ARTICLE_ERROR:
        case types.FETCH_ARTICLE_SUCCESS:
        case types.UPDATE_ARTICLE_ERROR:
        case types.UPDATE_ARTICLE_SUCCESS:
            return false;

        default: 
            return state;
    }
};

const errorMessage = (state = '', action) => {
    switch(action.type) {
        case types.FETCH_ARTICLE_ERROR:
        case types.UPDATE_ARTICLE_ERROR:
            return action.errorMessage;
        
        case types.FETCH_ARTICLE_REQUEST:
        case types.FETCH_ARTICLE_SUCCESS:
        case types.UPDATE_ARTICLE_REQUEST:
        case types.UPDATE_ARTICLE_SUCCESS:
            return '';

        default: 
            return state;
    }
};

export default combineReducers({
    article,
    isFetching,
    errorMessage
});