import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store';
import {fetchArticle} from './actions'; 

const ARTICLE_ID = '58b2cd11672ee9386578a415';
store.dispatch(fetchArticle(ARTICLE_ID));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);