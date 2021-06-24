import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header-comonent.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart.component';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
  } from './header.styles';



export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <Cart />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);