import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';
import { NavLink } from 'react-router-dom';
function Header(props) {
	return (
		<header className='header'>
			<Container>
				<Row className='justify-content-between'>
					<Col xs='auto'>
						<a
							className='header__link header__title'
							href='https://www.instagram.com/xuandungnguyen/'
							target='_blank'
							rel='noopener noreferrer'>
							HHQ
						</a>
					</Col>
					<Col xs='auto'>
						<NavLink
							exact
							className='header__link'
							to='/photos'
							activeClassName='header__link--active'>
							React-Redux Project
						</NavLink>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

Header.propTypes = {};

export default Header;
