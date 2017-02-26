import axios from 'axios';
import * as types from '../constants/actionTypes';

export const fetchArticle = id => dispatch => {
    dispatch(fetchArticleRequest());

    axios.get(`/articles/${id}`)
         .then(response => dispatch(fetchArticleSuccess(response)))
         .catch(err => dispatch(fetchArticleError('Error while getting article')))
}

export const fetchArticleRequest = () => ({type: types.FETCH_ARTICLE_REQUEST})
export const fetchArticleSuccess = article => ({type: types.FETCH_ARTICLE_SUCCESS, article})
export const fetchArticleError = errorMessage => ({type: types.FETCH_ARTICLE_ERROR, errorMessage})

export const updateArticle = (id, data) => dispatch => {
    dispatch(updateArticleRequest);

    axios.put(`/articles/${id}`, data)
         .then(response => dispatch(updateArticleSuccess(response)))
         .catch(err => dispatch(updateArticleError('Error while updating article')))
}

export const updateArticleRequest = () => ({type: types.UPDATE_ARTICLE_REQUEST})
export const updateArticleSuccess = article => ({type: types.UPDATE_ARTICLE_SUCCESS, article})
export const updateArticleError = errorMessage => ({type: types.UPDATE_ARTICLE_ERROR, errorMessage})