import React from 'react';
import ArticleContainer from '../containers/ArticleContainer';

const App = () => {
    return (
        <div className="app">
            <div>
                <a href="https://github.com/grebre0/test-sc" target="_blank">Source on github</a><br />
                <a href="mailto:polishchuk.code@gmail.com">polishchuk.code@gmail.com</a>
            </div>
            <ArticleContainer />
        </div>
    );
};

export default App;