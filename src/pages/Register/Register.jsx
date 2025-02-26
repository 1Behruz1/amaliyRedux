import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/fireBase";
import { Button, TextField, Container, Typography, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await dispatch(registerUser(email, password));
      navigate("/"); 
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Register</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button fullWidth variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
      <Typography variant="body2" mt={2}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
}

export default Register;
