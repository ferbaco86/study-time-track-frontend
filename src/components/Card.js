import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
display: flex;
width: 10vw;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
padding: 1rem;
margin: 1.2rem`;

const TitleName = styled.h4`
color: #8090a0;
font-weight: 300`;

const TimeText = styled.h2`
font-weight: bold;
font-size: 2.5rem;
margin-right: 0.4rem`;

const TimeContainer = styled.div`
display: flex;
align-items: center;`;

const Card = props => {
  const { title, time } = props;
  return (
    <CardContainer>
      <TitleName>{title}</TitleName>
      <TimeContainer>
        <TimeText>{time}</TimeText>
        <span>hr</span>
      </TimeContainer>
    </CardContainer>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
