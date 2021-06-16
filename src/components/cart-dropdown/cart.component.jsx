import React from 'react';
import './cart.styles.scss';
import Button from '../button/button.component';

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

export default Cart;