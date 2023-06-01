/**
 * Root reducer function.
 *
 * @module rootred
 * @returns {Function} - Combined reducer function.
 */

import { combineReducers } from "redux";

import { cartreducer } from "./reducer";

const rootred = combineReducers({
  cartreducer,
});

export default rootred;
