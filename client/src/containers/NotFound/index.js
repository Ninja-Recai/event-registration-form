import React from 'react';
import H2 from 'components/H2';
import styled from 'styled-components';

const PlainNotFound = styled.section`
  width: 100%;
  text-align: center;
  padding: 5rem 0;
`;

export default function NotFound() {
  return (
    <PlainNotFound>
      <H2 fontSize="5rem" textAlign="center">
        404 Not found
      </H2>
    </PlainNotFound>
  );
}
