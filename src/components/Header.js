import React from 'react';
import Button from './Button';


const Header = ({ title, visible, handleVisible }) => {

    return (
        <div className="header">
            <h1>{title}</h1>
            <Button
                text={visible ? "Close Add Task Bar" : "Show Add Task Bar"}
                color={visible ? "#fe0000" : "#6d0e8a"}
                handleVisible={handleVisible} />


        </div>
    )
}

export default Header;