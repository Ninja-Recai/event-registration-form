import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import Container from 'components/Container';
import H1 from 'components/H1';
import { themePropType } from '../theme';

const PlainAppHeader = styled.header`
  background-color: ${props => props.theme.prim};
`;

class AppHeader extends PureComponent {
  static propTypes = {
    theme: themePropType.isRequired,
  }

  render() {
    return (
      <PlainAppHeader>
        <Container>
          <H1 color={this.props.theme.white} fontSize={this.props.theme.fsLg} textAlign="center">
            Event registration
          </H1>
        </Container>
      </PlainAppHeader>
    );
  }
}


export default withTheme(AppHeader);
