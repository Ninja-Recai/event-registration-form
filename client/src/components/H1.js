import styled from 'styled-components';

const H1 = styled.h1`
  margin-bottom: 0.25rem;
  color: ${props => props.color ? props.color : props.theme.black};
  font-size: ${props => props.fontSize ? props.fontSize : props.theme.fsReg};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

export default H1;
