import React from 'react';
import PropTypes from 'prop-types';
import RandomPhoto from 'components/RandomPhoto';
import { FormFeedback, FormGroup } from 'reactstrap';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
	label: '',
};

function RandomPhotoField(props) {
	const { field, form, label } = props;
	const { name, value, onBlur } = field;

	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	const handleImageUrlChange = (newImgUrl) => {
		form.setFieldValue(name, newImgUrl);
	};
	return (
		<FormGroup>
			<RandomPhoto
				name={name}
				imageUrl={value}
				onImageUrlChange={handleImageUrlChange}
				onRandomButtonBlur={onBlur}
				className={showError ? 'is-invalid' : ''}
			/>
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	);
}

export default RandomPhotoField;
