import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      dispatch(login({ username: credentials.username }));
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#1E1E1E' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400, bgcolor: '#2D2D2D' }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ color: 'white' }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: '#444' },
                '&:hover fieldset': { borderColor: '#666' },
              },
              '& .MuiInputLabel-root': { color: '#666' },
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: '#444' },
                '&:hover fieldset': { borderColor: '#666' },
              },
              '& .MuiInputLabel-root': { color: '#666' },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, bgcolor: '#4CAF50', '&:hover': { bgcolor: '#45a049' } }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;