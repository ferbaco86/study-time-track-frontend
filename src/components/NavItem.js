import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
display: flex;
flex-direction: column;
color: white;`;

const NavItem = props => {
  const { icon, legend } = props;
  return (
    <Container>
      <i className={icon} />
      <small>{legend}</small>
    </Container>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
};

export default NavItem;
