import styled from 'styled-components';

import { ReactComponent as EmptyShoppingCart } from '../../assets/empty-cart.svg';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 15%;
  width: 80%;
  align-items: center;
`;

export const EmptyCartImage = styled(EmptyShoppingCart)`
  width: 50%;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  font-weight: 700;
  padding: 0;
`;
