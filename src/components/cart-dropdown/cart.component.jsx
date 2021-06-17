import React from 'react';
import './cart.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))}
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = ({cart: { cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);