import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '../member/components/Favorite';

const useStyles = makeStyles(theme => ({
	button: {
		marginRight: theme.spacing(3),
		width: theme.spacing(27),
		height: theme.spacing(4.5),
		fontSize: '12px',
		fontWeight: 'bold',
		color: 'white',
		boxShadow: 'none',
		textTransform: 'none',
		backgroundColor: '#fa6462',
		'&:hover': {
			backgroundColor: '#e74f4d',
			borderColor: '#0062cc',
			boxShadow: 'none',
		},
	},
}));

export default function PushBtn(props) {
	const classes = useStyles();

	const getUserId = () => {
		const member = JSON.parse(localStorage.getItem('myStorage'));
		return member !== null ? member.id : 0;
	};

	return (
		<div>
			<Button variant='contained' className={classes.button} onClick={() => alert('준비중 입니다.')}>
				프로젝트 밀어주기
			</Button>

			<Button variant='outlined'>
				<Favorite userId={getUserId()} projectId={props.projectId} />
			</Button>
		</div>
	);
}
