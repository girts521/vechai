import { Container, Typography, Box } from '@mui/material';
import RequestList from "../components/RequestList";

const fakeRequests = [
  { id: 1, material: 'Plastic Bottles', distance: '1.2km' },
  { id: 2, material: 'Cardboard', distance: '2.5km' },
  { id: 3, material: 'Mixed Glass', distance: '0.8km' },
];

const ListRequests = () => {
	return (
		<Box sx={{ py: 4 }}> 
			<Container maxWidth="sm">
			  <Typography variant="h4" component="h1" align="center" gutterBottom>
				Available Pickups
			  </Typography>
			  <RequestList requests={fakeRequests} />
			</Container>
		</Box>
	)
}

export  default ListRequests;
