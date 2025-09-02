import RequestCard from './RequestCard'
import { Stack } from '@mui/material'

const RequestList = ({ requests }) => {
	 if (requests.length === 0) {
		return <Typography>No available requests right now.</Typography>;
	  }

	return (
		<Stack spacing={2}>
		  {requests.map((request) => (
			<RequestCard key={request.id} request={request} />
		  ))}
		</Stack>
	)
}

export default RequestList;
