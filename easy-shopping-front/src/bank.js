/**
 * @Author: root
 * @Date:   2022-09-08T17:54:06+05:30
 * @Last modified by:   root
 * @Last modified time: 2022-09-08T19:17:25+05:30
 */
import {configureStore} from "@reduxjs/toolkit";
import productCut from "./Functionality/productCut";
import userCut from "./Functionality/userCut";
import mainApi from "./Services/mainApi";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";


const reducer = combineReducers({
  user: userCut,
  products: productCut,
  [mainApi.reducerPath]: mainApi.reducer,
});



const persistConfig = {
  key:'root',
  storage,
  blackList: [mainApi.reducerPath,"products"],
};


const persistedReducer = persistReducer(persistConfig, reducer);

const bank = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, mainApi.middleware],
});

export default bank;
