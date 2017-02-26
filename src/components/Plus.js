import React, {PropTypes} from 'react';

const Plus = ({position, onClick}) => {
    const style = {
        left: `${position[0]}px`,
        top: `${position[1]}px`
    };

    return (
        <a
            title="add tag"
            className="plus"
            style={style}
            onClick={onClick}>
        +
        </a>
    );
};

Plus.propTypes = {
    position: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Plus;