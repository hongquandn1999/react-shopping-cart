import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import './styles.scss';
import PhotoForm from '../../components/PhotoForm';
AddEditPage.propTypes = {};

function AddEditPage(props) {
	return (
		<div className='photo-edit'>
			<Banner title='Pick amazing photo 😍😍😍' />

			<div className='photo-edit__form'>
				<PhotoForm onSubmit={(value) => console.log('Form submit: ', value)} />
			</div>
		</div>
	);
}

export default AddEditPage;
