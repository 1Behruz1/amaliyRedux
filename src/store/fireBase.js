import axios from "axios";
import { userActions } from "./userSlice";
import { uiActions } from "./uiSlice";

const FIREBASE_URL = "https://amaliy-c1ce9-default-rtdb.firebaseio.com/users.json";

export const registerUser = (email, password) => {
  return async (dispatch) => {
    const register = async () => {
      const newUser = { email, password };
      const response = await axios.post(FIREBASE_URL, newUser);
      return { id: response.data.name, ...newUser };
    };

    try {
      const userData = await register();
      dispatch(userActions.setUser(userData));
      dispatch(
        uiActions.showNotifications({
          message: "Registration successful welcome",
          type: "success",
          open: true,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifications({
          message: "Error registering user please try again",
          type: "error",
          open: true,
        })
      );
    }
  };
};
