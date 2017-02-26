import {connect} from 'react-redux';
import Article from '../components/Article';
import {updateArticle} from '../actions';

const mapStateToProps = (state) => {
    return {
        id: state.article._id,
        text: state.article.text,
        tags: state.article.tags,
        isFetching: state.isFetching,
        errorMessage: state.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateArticle: (id, data) => {
            dispatch(updateArticle(id, data))
        }
    }
};

const ArticleContainer = connect(mapStateToProps, mapDispatchToProps)(Article);

export default ArticleContainer;