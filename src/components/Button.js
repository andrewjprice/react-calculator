import React from 'react';
import PropTypes from 'prop-types';
import "../styles/Button.css";

const Button = (props) => {
    const handleClick = () => {
        props.clickHandler(props.value);
    }

    const name = [
        "button-container",
        props.white ? "white" : "",
        props.orange ? "orange" : ""
    ];
    return(
        <div className={name.join(" ").trim()}>
            <button onClick={handleClick}>{props.value}</button>
        </div>
    )
}

Button.defaultProps = {
    value: "",
    white: false,
    orange: false
}

Button.propTypes = {
    value: PropTypes.string,
    white: PropTypes.bool,
    orange: PropTypes.bool,
    clickHandler: PropTypes.func
}

export default Button;