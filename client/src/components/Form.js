import React, { Component } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import Row from 'components/Row';
import Button from 'components/Button';
import H2 from 'components/H2';
import ErrorMessage from 'components/ErrorMessage';
import SuccessMessage from 'components/SuccessMessage';
import PropTypes from 'prop-types';

export const PlainForm = styled.form`
  width: 70rem;
  max-width: 100%;
  padding: 3rem;
  margin: 0 auto;
  background-color: ${props => props.theme.light};
  ${Row} {
    margin-bottom: 2rem;
  }
  ${H2} {
    margin-bottom: 3rem;
  }
  ${Button} {
    margin-top: 1rem;
  }
`;

class Form extends Component {
  static defaultProps = {
    successMessage: '',
    errorMessage: '',
  }

  static propTypes = {
    updateField: PropTypes.func.isRequired,
    addEvent: PropTypes.func.isRequired,
    formData: PropTypes.objectOf(PropTypes.string).isRequired,
    successMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool,
  }

  updateField = (e) => {
    const fieldName = e.target.getAttribute('name');
    const value = e.target.value;
    this.props.updateField({ fieldName, value });
  }

  submit = (e) => {
    e.preventDefault();
    this.props.addEvent(this.props.formData);
  }

  render() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yy = today.getFullYear();
    return (
      <PlainForm onSubmit={this.submit}>
        <H2 textAlign="center">Fill in the form to register your future event.</H2>
        <Row spaceBetween>
          <Input
            name="firstName"
            placeholder="First name"
            type="text"
            required="true"
            half
            value={this.props.formData.firstName}
            onChange={this.updateField}
            pattern="[^0-9]*"
          />
          <Input name="lastName" placeholder="Last name" type="text" required="true" half value={this.props.formData.lastName} onChange={this.updateField} pattern="[^0-9]*" />
        </Row>
        <Row spaceBetween>
          <Input name="email" placeholder="E-mail address" type="email" required="true" half value={this.props.formData.email} onChange={this.updateField} />
          <Input name="eventDate" placeholder="Event Date" type="date" required="true" half min={`${yy}-${mm >= 10 ? mm : `0${mm}`}-${dd >= 10 ? dd : `0${dd}`}`} onSelect={this.updateField} onChange={this.updateField} />
        </Row>
        {this.props.errorMessage && (
          <ErrorMessage>
            Oops, an error occured!
            <output>{this.props.errorMessage}</output>
          </ErrorMessage>
        )}
        {this.props.successMessage && (
          <SuccessMessage>
            {this.props.successMessage}
          </SuccessMessage>
        )}
        <Button disabled={this.props.isFetching}>Save the event</Button>
      </PlainForm>
    );
  }
}

export default Form;
