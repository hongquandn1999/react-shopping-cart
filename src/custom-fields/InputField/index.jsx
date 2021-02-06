import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disable: PropTypes.bool,
};

InputField.defaultProps = {
	type: 'text',
	label: '',
	placeholder: '',
	disable: false,
};

function InputField(props) {
	const { field, form, type, label, placeholder, disable } = props;
	const { name } = field;

	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Input
				id={name}
				placeholder={placeholder}
				{...field}
				type={type}
				disable={disable}
				invalid={showError}
			/>
			{/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	);
}
export default InputField;
