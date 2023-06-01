import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "./Header";
import { DLT } from "../redux/actions/action";

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  cartreducer: {
    carts: [
      { id: 1, imgdata: "image1.jpg", rname: "Shop 1", price: 10, qnty: 2 },
      { id: 2, imgdata: "image2.jpg", rname: "Shop 2", price: 15, qnty: 1 },
    ],
  },
});

describe("Header component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it("should render the header component", () => {
    // Assert that the header component is rendered
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should display the cart count badge", () => {
    // Assert that the cart count badge is displayed with the correct count
    const badge = screen.getByTestId("cart-badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("2");
  });

  it("should open the cart menu on click", () => {
    // Assert that the cart menu is closed initially
    const cartMenu = screen.queryByRole("menu");
    expect(cartMenu).not.toBeInTheDocument();

    // Open the cart menu by clicking on the cart icon
    fireEvent.click(screen.getByRole("button", { name: "Cart" }));

    // Assert that the cart menu is now open
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("should remove an item from the cart", () => {
    // Mock the dispatch function from useDispatch
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useDispatch: () => mockDispatch,
    }));

    // Render the header component with the mocked useDispatch
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    // Click on the delete icon for the first item in the cart
    fireEvent.click(screen.getAllByTestId("delete-icon")[0]);

    // Assert that the DLT action is dispatched with the correct item ID
    expect(mockDispatch).toHaveBeenCalledWith(DLT(1));
  });

  // Add more test cases as needed
});
