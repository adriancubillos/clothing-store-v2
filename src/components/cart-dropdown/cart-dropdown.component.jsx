import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartItems,
  EmptyCart,
  EmptyCartImage,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyCart>
            <EmptyCartImage />
            <EmptyMessage>Your cart is empty!</EmptyMessage>
          </EmptyCart>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
