import React from 'react';
import Button from './Button';
import '../styles/ButtonGrid.css';

const ButtonGrid = (props) => {
    const handleClick = value => {
        props.clickHandler(value);
    };

    return(
        <div className="component-button-grid">
            <Button value="C" clickHandler={handleClick} white />
            <Button value="+/-" clickHandler={handleClick} />
            <Button value="%" clickHandler={handleClick} />
            <Button value="/" clickHandler={handleClick} orange />
            <Button value="7" clickHandler={handleClick} />
            <Button value="8" clickHandler={handleClick} />
            <Button value="9" clickHandler={handleClick} />
            <Button value="*" clickHandler={handleClick} orange />
            <Button value="4" clickHandler={handleClick} />
            <Button value="5" clickHandler={handleClick} />
            <Button value="6" clickHandler={handleClick} />
            <Button value="-" clickHandler={handleClick} orange />
            <Button value="1" clickHandler={handleClick} />
            <Button value="2" clickHandler={handleClick} />
            <Button value="3" clickHandler={handleClick} />
            <Button value="+" clickHandler={handleClick} orange />
            <Button value="0" clickHandler={handleClick} />
            <div></div>
            <Button value="." clickHandler={handleClick} />
            <Button value="=" clickHandler={handleClick} orange />
        </div>
    )
}

export default ButtonGrid;