import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => (
	<Typography variant="body2" color="textSecondary" align="center" style={{ marginBottom: '2rem' }}>
		{'Copyright © '}
		<Link color="inherit" href="">
			Rajat Sharma
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
);