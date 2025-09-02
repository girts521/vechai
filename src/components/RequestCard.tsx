import { Card, CardContent, CardActions, Button, Box, Typography } from '@mui/material';

const RequestCard = ( {request} ) => {

	return (
		<Card variant='outlined'>
		  <CardContent sx={{ 
			  display: 'flex', 
			  justifyContent: 'center',
			  alignItems: 'center',
			}}>
				<Box>
					<Typography variant="h6">{request.material}</Typography>
					<Typography color="text.secondary">{request.distance} away</Typography>
				</Box>
		  </CardContent>
		  <CardActions sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		  }}>
			<Button variant="contained" size="small">Claim Pickup</Button>
		  </CardActions>
		</Card>
	)
}

export default RequestCard;
