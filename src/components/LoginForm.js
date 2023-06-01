/**
 * This is a React component for a login form that uses Redux to dispatch a login action.
 * @returns The LoginForm component is being returned, which is a form with two input fields for
 * username and password, and a submit button. When the form is submitted, the handleSubmit function is
 * called, which dispatches a login action with the username and password values, and then resets the
 * input fields to empty strings.
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
/**
 * The component for the login form.
 * @returns {JSX.Element} The rendered LoginForm component.
 */
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  /**
   * Handles the form submission.
   * Dispatches the login action with the provided username and password.
   * Resets the form fields after submission.
   * @param {Event} e - The form submission event.
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
