import { Fragment, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
  DisplayName,
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const signOutHandler = () => {
    signOutUser();
    navigate('/');
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <div>
              <NavLink as='span' onClick={signOutHandler}>
                SIGN OUT
              </NavLink>
              <DisplayName
                userName={currentUser.email}
                className='display-name'
              >
                {currentUser.email}
              </DisplayName>
            </div>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
