import React from "react";
import { useDispatch } from "react-redux";
// import { actions } from "../store/userSlice";
import { userActions } from "../../store/userSlice";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Private() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userActions.logout());
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Welcome to Private Page</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}

export default Private;
