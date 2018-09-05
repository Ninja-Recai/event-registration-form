import { connect } from 'react-redux';
import { addEvent } from 'actions/events';
import { updateField } from 'actions/form';
import Form from 'components/Form';

const mapStateToProps = state => ({
  errorMessage: state.events.errorMessage,
  successMessage: state.events.successMessage,
  fetchReply: state.events.fetchReply,
  formData: state.form.formData,
});

const mapDispatchToProps = {
  addEvent,
  updateField,
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
