import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ContainerLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
padding: 0.5rem 1rem;`;

const NavItem = props => {
  const { icon, legend, path } = props;
  return (
    <ContainerLink to={path}>
      <i className={icon} />
      <small>{legend}</small>
    </ContainerLink>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
