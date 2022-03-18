import React from 'react';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartTotal, cartItems } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
