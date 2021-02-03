import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

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
	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Input
				id={name}
				placeholder={placeholder}
				{...field}
				type={type}
				disable={disable}
			/>
		</FormGroup>
	);
}

export default InputField;
