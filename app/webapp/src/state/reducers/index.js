import { combineReducers } from "redux";

import menuReducer from "./menu";
import pagesReducer from "./pages";
import productsReducer from "./products";
import userReducer from "./user";
import asyncReducer from "./async";

const allReducers = combineReducers({
    menu: menuReducer,
    pages: pagesReducer,
    products: productsReducer,
    user: userReducer,
    async: asyncReducer
});

export default allReducers;