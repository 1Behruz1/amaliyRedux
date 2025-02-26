import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

function Public() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Welcome to Public Page</Typography>
      <Button variant="contained" color="primary" component={Link} to="/login" style={{ marginRight: "10px" }}>
        Login
      </Button>
      <Button variant="contained" color="secondary" component={Link} to="/register">
        Register
      </Button>
    </Container>
  );
}

export default Public;
