import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store"; // assuming you have a Redux store configured
import CardsDetails from "./CardsDetails";

describe("CardsDetails", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/details/1"]}>
          <Route path="/details/:id">
            <CardsDetails />
          </Route>
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders the details page", () => {
    const headingElement = screen.getByRole("heading", {
      name: "Iteams Details Page",
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("displays the product details", () => {
    // Assuming you have a mocked data for the test
    const mockData = [
      {
        id: 1,
        rname: "Milk",
        imgdata:
          "https://payfresh.in/wp-content/uploads/2020/12/Heritage-Toned-Milk.jpg",
        price: 350,
        qnty: 2,
        rating: 4,
        somedata: "1175 + order placed from here recently",
      },
    ];

    // Update the Redux store with the mock data
    store.dispatch({ type: "UPDATE_CART", payload: mockData });

    // You can use different selectors to test the rendered elements
    const productNameElement = screen.getByText(/Milk/i);
    const priceElement = screen.getByText(/₹350/i);
    const quantityElement = screen.getByText(/2/i);
    const ratingElement = screen.getByText(/4 ★/i);
    const removeButtonElement = screen.getByRole("button", { name: /remove/i });

    expect(productNameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(quantityElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(removeButtonElement).toBeInTheDocument();
  });

  // Add more test cases to cover other functionality and scenarios
});
