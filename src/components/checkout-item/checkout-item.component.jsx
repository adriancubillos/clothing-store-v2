import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeCartItem, deleteCartItem } =
    useContext(CartContext);

  const deleteItemHandler = () => deleteCartItem(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeCartItem(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={deleteItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
