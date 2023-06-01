/**
 * These are three JavaScript functions that handle adding, removing, and removing individual items
 * from a shopping cart.
 * @param item - an object representing an item to be added to the cart
 * @returns Three action creator functions are being returned, each returning an object with a `type`
 * property and a `payload` property. The `ADD` function returns an object with `type` set to
 * "ADD_CART" and `payload` set to the `item` parameter. The `DLT` function returns an object with
 * `type` set to "RMV_CART" and `payload` set
 */
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove items
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// remove individual item
export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
