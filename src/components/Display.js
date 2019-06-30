import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css'

const Display = (props) => {
    return(
        <div className="display-box">
            <div className="display-input">{props.value}</div>
        </div>
    )
};

Display.defaultProps = {
    value: "0"
}

Display.propTypes = {
    value: PropTypes.string
}

export default Display;