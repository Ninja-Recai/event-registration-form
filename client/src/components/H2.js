import styled from 'styled-components';

const H2 = styled.h2`
  margin-bottom: 0.25rem;
  color: ${props => props.color ? props.color : props.theme.dark};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fsReg};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export default H2;
