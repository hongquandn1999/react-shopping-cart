import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
	placeholder: PropTypes.string,
	disable: PropTypes.bool,
	options: PropTypes.array,
};

SelectField.defaultProps = {
	label: '',
	placeholder: '',
	disable: false,
	options: [],
};

function SelectField(props) {
	const { field, label, placeholder, disable, options } = props;
	const { name, value } = field;
	const selectedOption = options.find((option) => option.value === value);

	const handleSelectedOptionChange = (selectedOption) => {
		const selectedValue = selectedOption
			? selectedOption.value
			: selectedOption;

		const changeEvent = {
			target: {
				name: name,
				value: selectedValue,
			},
		};
		field.onChange(changeEvent);
	};
	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Select
				id={name}
				placeholder={placeholder}
				{...field}
				value={selectedOption}
				onChange={handleSelectedOptionChange}
				disable={disable}
				options={options}
			/>
		</FormGroup>
	);
}

export default SelectField;
