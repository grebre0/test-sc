import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store';
import {fetchArticle} from './actions';
import {ARTICLE_ID} from './constants/article';

store.dispatch(fetchArticle(ARTICLE_ID));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);