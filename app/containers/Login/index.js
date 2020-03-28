import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Copyright from '../../components/Copyright';

const useStyles = makeStyles((theme) => ({
	title: {
		marginBottom: '2rem',
		fontWeight: 600,
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		display: 'inline-block',
		textTransform: 'none',
		fontSize: '15.8px',
		padding: '8px 16px',
		border: 'rgba(0, 0, 0, 0.9)',
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 1)',
		}
	},
}));

export default function SignUp() {
	const classes = useStyles();
	const [country, setCountry] = React.useState('India');
	const [fName, setFname] = React.useState('');
	const [lName, setLname] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [birthday, setBirthday] = React.useState('');

	const [fNameError, setFNameError] = React.useState(null);
	const [lNameError, setLNameError] = React.useState(null);
	const [passwordError, setPasswordError] = React.useState(null);
	const [emailError, setEmailError] = React.useState(null);

	const handleCountryChange = event => {
		setCountry(event.target.value);
	};
	
	
	const handleFnameChange = event => {
		setFname(event.target.value);

		if (event.target.value.length <= 3) {
			setFNameError('At least 3 characters required');
		} else {
			setFNameError(null);
		}
	}

	const handleLnameChange = event => {
		setLname(event.target.value);

		if (event.target.value.length <= 3) {
			setLNameError('At least 3 characters required');
		} else {
			setLNameError(null);
		}

	}

	const handleEmailChange = event => {
		setEmail(event.target.value);

		var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
		var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
		var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
		var sQuotedPair = '\\x5c[\\x00-\\x7f]';
		var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
		var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
		var sDomain_ref = sAtom;
		var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
		var sWord = '(' + sAtom + '|' + sQuotedString + ')';
		var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
		var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
		var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
		var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
		var emailRegex = new RegExp(sValidEmail);
		if (event.target.value.match(emailRegex)) {
			setEmailError(null);
		} else {
			setEmailError('Valid email required');
		}
	}

	const handlePasswordChange = event => {
		setPassword(event.target.value);

		var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		console.log('p', password, password.match(passwordRegex));
		if (event.target.value.match(passwordRegex)) {
			setPasswordError(null);
		} else {
			setPasswordError('At least 8 digits, 1 uppercase, 1 number and 1 special character');
		}
	}

	const handlePhoneChange = event => {
		setPhone(event.target.value);
	}

	const handleBirthdayChange = event => {
		setBirthday(event.target.value);
	}

	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				{/* <Avatar className={classes.avatar}>
        
        </Avatar> */}
				<Typography component="h1" variant="h4" className={classes.title}>
					Sign up with email
        </Typography>
				<form className={classes.form} onSubmit={handleSubmit} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<label>First Name</label>
							<input
								autoComplete="fname"
								name="firstName"
								required
								value={fName}
								onChange={handleFnameChange}
								autoFocus
							/>
							{fNameError && <Alert severity="error">{fNameError}</Alert>}
						</Grid>
						<Grid item xs={12} sm={12}>
							<label>Last Name</label>
							<input
								required
								name="lastName"
								value={lName}
								onChange={handleLnameChange}
								autoComplete="lname"
							/>
							{lNameError && <Alert severity="error">{lNameError}</Alert>}
						</Grid>
						<Grid item xs={12}>
							<label>Email</label>
							<input
								required
								label="Email Address"
								name="email"
								value={email}
								onChange={handleEmailChange}
								autoComplete="email"
							/>
							{emailError &&	<Alert severity="error">{emailError}</Alert>}
						</Grid>
						<Grid item xs={12}>
							<label>Password</label>
							<input
								required
								name="password"
								value={password}
								onChange={handlePasswordChange}
								label="Password"
								type="password"
							/>
							{passwordError &&	<Alert severity="error">{passwordError}</Alert>}
						</Grid>
						<Grid item xs={12}>
							<label>Phone Number</label>
							<input
								required
								value={phone}
								onChange={handlePhoneChange}
								name="phoneNumber"
							/>
						</Grid>
						<Grid item xs={12}>
							<label>Birthday date</label>
							<input
								type="date"
								name="birthday"
								value={birthday}
								onChange={handleBirthdayChange}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<label>Country</label>
							<select
								value={country}
								onChange={handleCountryChange}
							>
								<option value='India'>India</option>
								<option value='USA'>USA</option>
								<option value='Russia'>Russia</option>
							</select>
						</Grid>

						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="dark" />}
								label="I agree to terms and conditions and privacy policy"
							/>
						</Grid>
					</Grid>
					<div style={{ textAlign: 'center' }}>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign Up
						</Button>
						<Link href="#" style={{ color: 'rgba(2, 158, 116, 1)', display: 'block', fontSize: '18px' }}>
							Already have an account? Sign in
						</Link>
					</div>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
