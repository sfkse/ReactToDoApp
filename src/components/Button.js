import React from 'react';

const Button = ({ text, color, handleVisible }) => {

    return (

        <button
            onClick={handleVisible}
            style={{ backgroundColor: color }}
            className="add-button">{text}
        </button>

    )
}

export default Button;