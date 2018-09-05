import React, { PureComponent } from 'react';
import Container from 'components/Container';
import FormContainer from 'containers/Home/FormContainer';

class HomePage extends PureComponent {
  render() {
    return (
      <Container>
        <FormContainer />
      </Container>
    );
  }
}

export default HomePage;
