import React from 'react';
import PropTypes from 'prop-types';
import './RandomPhoto.scss';
import { Button } from 'reactstrap';
RandomPhoto.propTypes = {
	name: PropTypes.string,
	imgURL: PropTypes.string,
	onImageUrlChange: PropTypes.func,
	onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
	name: '',
	imgURL: '',
	onImageUrlChange: null,
	onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
	const randomId = Math.trunc(Math.random() * 2000);
	return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
	const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

	const handleRandomPhotoClick = async () => {
		if (onImageUrlChange) {
			const randomImageUrl = getRandomImageUrl();
			onImageUrlChange(randomImageUrl);
		}
	};
	return (
		<div className='random-photo'>
			<div className='random-photo__button'>
				<Button
					outline
					color='primary'
					name={name}
					onBlur={onRandomButtonBlur}
					onClick={handleRandomPhotoClick}>
					Random a photo
				</Button>
			</div>
			<div className='random-photo__image'>
				{imageUrl && (
					<img src={imageUrl} alt='Ooops...Not found. Please click again!!' />
				)}
			</div>
		</div>
	);
}

export default RandomPhoto;
