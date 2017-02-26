import {connect} from 'react-redux';
import Links from '../components/Links';
import {updateArticle} from '../actions'; 

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateArticle: (id, data) => {
            dispatch(updateArticle(id, data))
        }
    }
}

const LinksContainer = connect(mapStateToProps, mapDispatchToProps)(Links);

export default LinksContainer;