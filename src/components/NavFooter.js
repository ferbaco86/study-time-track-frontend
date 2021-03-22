import styled from 'styled-components';
import NavItem from './NavItem';

const FooterContainer = styled.footer`
position: fixed;
bottom: 0;
height: 10vh;
width: 100%;
display: flex;
justify-content: space-between;
background-color: #67899c`;

const NavFooter = () => (
  <FooterContainer>
    <NavItem icon="fas fa-plus" legend="Add Session" path="/session" />
    <NavItem icon="fas fa-book-open" legend="Check Sessions" path="/user" />
    <NavItem icon="fas fa-chart-line" legend="Your Progress" path="/" />
  </FooterContainer>
);

export default NavFooter;
