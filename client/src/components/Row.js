import styled from 'styled-components';
import is from 'styled-is';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${is('spaceBetween')`
    justify-content: space-between;
  `}
`;

export default Row;
