import styled from 'styled-components';

const ErrorMessage = styled.div`
  background-color: ${props => props.theme.white};
  padding: 2rem;
  margin-bottom: 1rem;
  output {
    margin-top: 1rem;
    padding: 1rem;
    color: red;
    display: block;
    background-color: #fff2f2;
    font-size: ${props => props.theme.fsSm};
  }
`;

ErrorMessage.displayName = 'ErrorMessage';
export default ErrorMessage;
