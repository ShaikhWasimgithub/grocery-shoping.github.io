import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Cards component", () => {
  let wrapper;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<Cards />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of cards", () => {
    const cards = wrapper.find("Card");
    expect(cards.length).toBe(wrapper.state("data").length);
  });

  it("dispatches ADD action when 'Add to Cart' button is clicked", () => {
    const addButton = wrapper.find("Button").first();
    addButton.simulate("click");

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD",
      payload: expect.any(Object),
    });
  });
});
