import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';


MainPage.propTypes = {};

function MainPage(props) {
	return (
		<div className='photo-main'>
			<Banner title='My awesome photos 💕' backgroundUrl={Images.PINK_BG} />

			<Container className='text-center'>
				<Link to='photos/add'>Add new Photo</Link>
			</Container>
		</div>
	);
}

export default MainPage;
