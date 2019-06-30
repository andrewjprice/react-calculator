import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css'

export default class Display extends React.Component {
    static defaultProps = {
        value: "0"
    }
    
    static propTypes = {
        value: PropTypes.string
    }

    render() {
        return (
            <div className="display-box">
                <div className="display-text">{this.props.value}</div>
            </div>
        )
    }
}