import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import BulbIcon from 'assets/icons/bulb.svg';
import PenIcon from 'assets/icons/pen.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import LogoIcon from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 25px 0;
  width: 157px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.p`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogo />
    <StyledLinkList>
      <li>
        <ButtonIcon as={Link} to="/" icon={PenIcon} />
      </li>
      <li>
        <ButtonIcon as={Link} to="/twitters" icon={TwitterIcon} />
      </li>
      <li>
        <ButtonIcon as={Link} to="/articles" icon={BulbIcon} />
      </li>
    </StyledLinkList>
    <StyledLogoutButton as={Link} to="/" icon={LogoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
