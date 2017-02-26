import React, {PropTypes} from 'react';
import Plus from './Plus';
import Highlighter from '../services/Highlighter';
import Selector from '../services/Selector';

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handlePlusClick = this.handlePlusClick.bind(this);

        this.state = {
            text: this.props.text,
            selection: '',
            plusPosition: [0, 0]
        }
    }

    componentDidUpdate(prevProps) {
        // when receive text from server 
        if(prevProps.text === '' && this.props.text) {
            this.highlighter = new Highlighter(this.textNode);
            this.selector = new Selector();
            const newText = this.highlighter.highlightHard(this.props.tags, 'tag');
            this.setState({text: newText});
        }
    }

    componentWillReceiveProps(nextProps) {
        // when add new tag
        if(this.props.tags.length && this.props.tags.length !== nextProps.tags.length) {
            this.highlighter.resetHard();
            const newText = this.highlighter.highlightHard(nextProps.tags, 'tag');
            this.setState({text: newText});
        }
    }

    handleMouseUp() {
        const isInsideExistingTag = this.selector.isInsideElement('tag');
        if(isInsideExistingTag) return;

        const prevSelection = this.state.selection;
        const nextSelection = this.selector.getSelectionString().trim();
        const plusPosition = this.selector.getSelectionPosition(this.wrapperNode);
        let result;

        if(nextSelection) {
            result = this.highlighter.highlight(nextSelection, 'selection');
        } else {
            result = this.highlighter.reset();
        }

        this.setState({selection: nextSelection, text: result, plusPosition})
    }

    handlePlusClick() {
        const update = {
            text: this.props.text,
            tags: [...this.props.tags, this.state.selection]
        }
        this.props.updateArticle(this.props.id, update)
        this.setState({selection: ''});
    }

    render() {
        return (
            <div 
                className="article"
                ref={(node) => {this.wrapperNode = node}}>

                {/* error */}
                {!!this.props.errorMessage && (
                    <div className="error">{this.props.errorMessage}</div>
                )}

                {/* loader */}
                {!!this.props.isFetching && (
                    <div className="loader">Loading...</div>
                )}

                {/* text */}
                <div
                    className="text"
                    onMouseUp={this.handleMouseUp}
                    ref={(node) => {this.textNode = node}}
                    dangerouslySetInnerHTML={{__html: this.state.text || this.props.text}}></div>

                {/* Plus */}
                {!!this.state.selection.length && (
                    <Plus 
                        position={this.state.plusPosition}
                        onClick={this.handlePlusClick}
                    />
                )}
            </div>
        );
    }
};

Article.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    updateArticle: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired
};

export default Article;