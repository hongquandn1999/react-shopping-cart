import React from 'react';
import PropTypes from 'prop-types';
import RandomPhoto from 'components/RandomPhoto';
import { FormGroup } from 'reactstrap';

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
			/>
		</FormGroup>
	);
}

export default RandomPhotoField;
