import React from 'react';
import './button.styles.scss';

const Button = ({children, isGoogleSignin, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''}
    ${ isGoogleSignin ? 'google-sign-in' : '' }
    custom-button`}
     {...otherProps}
    >
         {children}
    </button>
);

export default Button;