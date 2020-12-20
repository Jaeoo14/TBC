import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Pas from '../../ProjectApiService';

import { Avatar } from '@material-ui/core';

const ProfileImage = props => {
	const { userId, width, height } = props;

	const [image, setImage] = useState(undefined);

	useEffect(() => {
		Pas.getUser(userId)
			.then(res => Pas.getFile(res.data.profileImg))
			.then(res => setImage(res.data))
			.catch(console.log);
	}, [userId]);

	return image !== undefined ? (
		<Image src={`data:${image.type};base64,${image.data}`} alt='profile image' style={{ width: width, height: height }} roundedCircle />
	) : (
		<Avatar />
	);
};

ProfileImage.defaultProps = {
	width: '50px',
	height: '50px',
};

export default ProfileImage;
