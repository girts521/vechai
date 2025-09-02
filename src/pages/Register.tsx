import { Container, Card, CardContent, Typography, TextField, Button, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const Register = () =>
{
	return (
		<Container 
		  maxWidth="xs" 
		  sx={{ 
			display: 'flex', 
			alignItems: 'center', 
			justifyContent: 'center', 
			minHeight: '100vh' 
		  }}
		>
		  <Card sx={{ width: '100%', p: 2 }}>
			<CardContent>
			  <Stack spacing={2}>
				<Typography variant="h4" component="h1" gutterBottom align="center">
				  Register
				</Typography>

				<TextField 
				  label="Email Address" 
				  variant="outlined" 
				  type="email" 
				  required 
				  fullWidth 
				/>
				<TextField 
				  label="Password" 
				  variant="outlined" 
				  type="password" 
				  required 
				  fullWidth 
				/>
				<Button 
				  variant="contained" 
				  color="primary" 
				  type="submit" 
				  fullWidth
				  sx={{ mt: 1 }}
				>
				  Log In
				</Button>
				<Typography variant="body2" align="center">
				  <Link component={RouterLink} to="/login">
					Already have an account? Log in!	
				  </Link>
				</Typography>
			  </Stack>
			</CardContent>
		  </Card>
		</Container>
	)
}

export default Register;
