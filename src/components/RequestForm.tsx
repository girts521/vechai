// src/components/RequestForm.tsx
import { TextField, Button, Stack, Typography } from '@mui/material';

function RequestForm() {
  return (
    <Stack component="form" spacing={3}>
      <TextField
        label="Address / Landmark"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        label="Description of Recyclables"
        variant="outlined"
        multiline
        rows={4}
        required
        fullWidth
        helperText="e.g., Two bags of plastic bottles, one box of cardboard."
      />
      <div>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Upload a Photo (Optional)
        </Typography>
        <Button variant="outlined" component="label">
          Choose File
          <input type="file" hidden />
        </Button>
      </div>
      <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        size="large"
        sx={{ alignSelf: 'flex-start' }} // Aligns button to the left
      >
        Submit Request
      </Button>
    </Stack>
  );
}

export default RequestForm;
