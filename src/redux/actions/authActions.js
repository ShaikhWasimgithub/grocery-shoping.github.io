export const login = (username, password) => {
  // Perform authentication logic here
  // For example, make an API call to verify credentials
  // You can use axios or fetch to make the API call

  // On successful login, you can dispatch an action
  // to update the Redux state with the authenticated user details
  return (dispatch) => {
    // Perform API call or authentication logic here
    // Example: Assuming the API response contains user data
    const userData = { id: 1, username: "exampleUser" };

    // Dispatch action to update Redux state
    dispatch({ type: "LOGIN_SUCCESS", payload: userData });
  };
};
