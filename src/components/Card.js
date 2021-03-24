import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
padding: 1rem;`;

const TitleName = styled.h4`
color: #8090a0;`;

const TimeText = styled.h2`
font-weight: bold;`;

const Card = props => {
  const { title, time } = props;
  return (
    <CardContainer>
      <TitleName>{title}</TitleName>
      <TimeText>{time}</TimeText>
    </CardContainer>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
