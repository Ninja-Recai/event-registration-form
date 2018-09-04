import styled from 'styled-components';

const SuccessMessage = styled.div`
  padding: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.highlight};
`;

SuccessMessage.displayName = 'SuccessMessage';

export default SuccessMessage;
