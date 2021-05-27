import { combineReducers } from "redux";
import cartReducer from "./cart";
import productReducer from "./product";
import usersReducer from "./users";

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    users: usersReducer
});

export default rootReducer;