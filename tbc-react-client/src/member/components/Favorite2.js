import React, { useState } from 'react';
import Pas from '../../ProjectApiService';

import FavoriteIcon from '@material-ui/icons/Favorite';
import NotFavoriteIcon from '@material-ui/icons/FavoriteBorder';

const Favorite2 = ({ user, projectId }) => {
	const [like, setLike] = useState(user && user.likeProjects.split(',').filter(like => like == projectId).length !== 0);

	const onToggle = e => {
		console.log('Favorite2.onToggle like, projectId=', like, projectId);
		e.stopPropagation();

		if (user == undefined)
			// null or undefined
      return;
      
    console.log('like=', like);
		if (!like) {
			// 추가
			if (user.likeProjects === '') user.likeProjects = projectId + '';
			else user.likeProjects += ',' + projectId;
		} else {
			// 빼기
			user.likeProjects = user.likeProjects
				.split(',')
				.filter(pId => pId != projectId)
				.toString();
		}

		Pas.updateUser(user);
		setLike(!like);
	};

	return <div onClick={onToggle}>{like ? <FavoriteIcon color='secondary' /> : <NotFavoriteIcon />}</div>;
};

export default Favorite2;
