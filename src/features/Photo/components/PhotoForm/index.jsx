import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
	onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
	onSubmit: null,
};

function PhotoForm(props) {
	const initialValue = {
		title: '',
		categoryId: null,
		photo: '',
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('This field is required'),
		categoryId: Yup.string().required('This field is required').nullable(),
		photo: Yup.string().required('This field is required'),
	});

	return (
		<Formik
			initialValues={initialValue}
			onSubmit={(values) => console.log(values)}
			validationSchema={validationSchema}>
			{(formikProps) => {
				// do something here ...
				const { values, errors, touched } = formikProps;
				console.log({ values, errors, touched });
				return (
					<Form>
						<FastField
							name='title'
							component={InputField}
							label='Title'
							placeholder='title my images ...'
						/>
						<FastField
							name='categoryId'
							component={SelectField}
							label='Category'
							placeholder="What's your photo category"
							options={PHOTO_CATEGORY_OPTIONS}
						/>
						<FastField
							name='photo'
							component={RandomPhotoField}
							label='Photo'
						/>

						<FormGroup>
							<Button type='submit' color='primary'>
								Add to album
							</Button>
						</FormGroup>
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
