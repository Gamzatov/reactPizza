import React from 'react';
import classNames from 'classnames';


const ButtonCart = ({className, outline, children,onClick})=>{

    return (
        <button onClick={onClick} className={classNames('button',className, {
            'button--cart': outline,
        })
        }>
            {children}
        </button>
    );
};

export default ButtonCart;