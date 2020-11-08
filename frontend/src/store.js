import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "reducers/cartReducers";
import {
  productListReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
  productDetailsReducer
} from "reducers/productReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
  userRegisterReducer,
  userUpdateProfileReducer
} from "reducers/userReducers";
import {
  orderPayReducer,
  orderListReducer,
  orderCreateReducer,
  orderListMyReducer,
  orderDetailsReducer,
  orderDeliverReducer
} from "reducers/orderReducers";

const reducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productDetails: productDetailsReducer,
  productUpdate: productUpdateReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderList: orderListReducer,
  orderListMy: orderListMyReducer,
  orderDeliver: orderDeliverReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    paymentMethod: paymentMethodFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: {
    userInfo: userInfoFromStorage
  }
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
