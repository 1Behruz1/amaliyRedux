import axios from "axios";
import { userActions } from "./userSlice";

const FIREBASE_URL = "https://amaliy-c1ce9-default-rtdb.firebaseio.com/users.json";

export const loginUser = (email, password, navigate, setSuccess, setError) => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await axios.get(FIREBASE_URL);
      return response.data;
    };
    // ustoz bu try hammada shunaqa umuman oxshamaganiga shunaqa qildik etibor bermen 
    try {
      const users = await fetchUsers();
      const user = Object.entries(users || {}).find(
        ([, u]) => u.email === email && u.password === password
      );

      if (user) {
        const loggedInUser = { id: user[0], ...user[1] };
        dispatch(userActions.setUser(loggedInUser));
        
        setSuccess("Login successful");
        setError(null);

        setTimeout(() => {
          navigate("/private");
        }, 2000);
      } else {
        setError("Invalid email or password please try again");
        setSuccess(null);
      }
    } catch (error) {
      setError("Login failed try again later");
      setSuccess(null);
    }
  };
};
