import React, {PropTypes} from 'react';
import {ARTICLE_ID, DEFAULT_TAGS} from '../constants/article';

const Links = ({updateArticle}) => {
    return (
        <div>
            <a href="mailto:polishchuk.code@gmail.com">Email me</a><br />
            <a href="https://github.com/grebre0/test-sc" target="_blank">Source on github</a><br />
            <a href="" onClick={() => {updateArticle(ARTICLE_ID, {tags: DEFAULT_TAGS})}}>Reset to default tags</a>
        </div>
    );
};

Links.propTypes = {
    updateArticle: PropTypes.func.isRequired
};

export default Links;