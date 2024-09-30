import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  // HiOutlineSearch, // Icon for Browse
  HiOutlineMap, // Icon for Map
  // HiOutlineClipboardList, // Icon for Dashboard
  // HiOutlineChatAlt2, // Icon for Message
  HiOutlineBriefcase, // Icon for Marketplace
  HiOutlineShoppingCart, // Icon for Cart
  HiOutlineUser, // Icon for Profile
} from 'react-icons/hi2';
import { FaFirefoxBrowser } from 'react-icons/fa';
import { MdDashboard, MdOutlineDashboard } from 'react-icons/md';
import { FaRegMessage } from 'react-icons/fa6';
import { IoMdCreate } from 'react-icons/io';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-orange-500);
  }
  &:hover span,
  &:active span,
  &.active:link span,
  &.active:visited span {
    color: var(--color-orange-500);
  }
  span {
    display: ${(props) =>
      props.isExpanded
        ? 'inline'
        : 'none'}; // Toggle text visibility based on sidebar state
    /* &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-orange-500);
    } */
  }
`;

const HorizontalLine = styled.hr`
  border: 1px solid var(--color-grey-200);
  margin: 0.8rem auto; // Adjust margins as needed
  width: 90%;
`;

function MainNav({ isExpanded }) {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/home" isExpanded={isExpanded}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <HorizontalLine />
        <li>
          <StyledNavLink to="/browse" isExpanded={isExpanded}>
            <FaFirefoxBrowser />
            <span>Browse</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/map" isExpanded={isExpanded}>
            <HiOutlineMap />
            <span>Map</span>
          </StyledNavLink>
        </li>
        <HorizontalLine />
        <li>
          <StyledNavLink to="/dashboard" isExpanded={isExpanded}>
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/messages" isExpanded={isExpanded}>
            <FaRegMessage />
            <span>Messages</span>
          </StyledNavLink>
        </li>
        <HorizontalLine />
        <li>
          <StyledNavLink to="/marketplace" isExpanded={isExpanded}>
            <HiOutlineBriefcase />
            <span>Marketplace</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cart" isExpanded={isExpanded}>
            <HiOutlineShoppingCart />
            <span>Cart</span>
          </StyledNavLink>
        </li>
        <HorizontalLine />
        <li>
          <StyledNavLink to="/profile" isExpanded={isExpanded}>
            <HiOutlineUser />
            <span>Profile</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" isExpanded={isExpanded}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/create" isExpanded={isExpanded}>
            <IoMdCreate />
            <span>Create</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

MainNav.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default MainNav;
