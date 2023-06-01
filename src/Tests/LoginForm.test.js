import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoginForm from "./LoginForm";
import { login } from "../redux/actions/authActions";

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({});

describe("LoginForm component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  });

  it("should render the LoginForm component", () => {
    // Assert that the LoginForm component is rendered
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("should update the state when input values change", () => {
    // Get the username and password input fields
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Type values into the input fields
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // Assert that the state is updated with the correct values
    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpassword");
  });

  it("should dispatch the login action when the form is submitted", () => {
    // Mock the useDispatch hook
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useDispatch: () => mockDispatch,
    }));

    // Render the component with the mocked useDispatch
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    // Get the username and password input fields
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Type values into the input fields
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    // Assert that the login action is dispatched with the correct username and password
    expect(mockDispatch).toHaveBeenCalledWith(
      login("testuser", "testpassword")
    );
  });
});
