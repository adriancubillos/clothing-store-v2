import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EmptyShoppingCart } from '../../assets/empty-cart.svg';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className='empty-cart'>
            <EmptyShoppingCart className='empty-cart-image' />
            <span className='empty-message'>Your cart is empty!</span>
          </div>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
