import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store';
import {fetchArticle} from './actions'; 

const ARTICLE_ID = "58b17d496d32f99ee24231e3";
store.dispatch(fetchArticle(ARTICLE_ID));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);