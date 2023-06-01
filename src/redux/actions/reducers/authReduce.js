/**
 * Authentication reducer function.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @returns {Object} - The new state.
 */

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
