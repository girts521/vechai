import { Box, Typography, Container, Paper } from '@mui/material';
import RequestForm from '../components/RequestForm'

const CreateRequest = () => {
	return (
		<Box sx={{ py: 4 }}>
		  <Container maxWidth="md">
			<Typography variant="h4" component="h1" align="center" gutterBottom>
			  Create a New Pickup Request
			</Typography>
			<Paper sx={{ p: 4 }}>
			  <RequestForm />
			</Paper>
		  </Container>
		</Box>
	)
}
 export  default CreateRequest;
