import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const accentColor = 'crimson';

//HACK how to implement a @mixin
const userNameStyles = css`
  color: ${accentColor};
  font-size: small;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

export const DisplayName = styled.span`
  ${({ userName }) => userName && userNameStyles};

  &:hover {
    transform: scale(1.5);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
