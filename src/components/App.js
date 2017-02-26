import React from 'react';
import ArticleContainer from '../containers/ArticleContainer';
import LinksContainer from '../containers/LinksContainer';
import {resetToDefault} from '../actions';

const App = () => {
    return (
        <div className="app">
            <LinksContainer />
            <ArticleContainer />
        </div>
    );
};

export default App;