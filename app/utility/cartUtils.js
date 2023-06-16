import asyncStorage from "../store/asyncStorage";
import { CART_LIST_KEY } from "../store/constants";

const getUserCartKey = (username) => {
  return `${username}_${CART_LIST_KEY}`;
};

export const fetchFromCart = async (username) => {
  const USER_CART_LIST_KEY = getUserCartKey(username);
  return asyncStorage.getDataObject(USER_CART_LIST_KEY);
};

export const addToCart = async (username, item) => {
  try {
    const USER_CART_LIST_KEY = getUserCartKey(username);
    const cartItemList = await fetchFromCart(username);
    if (cartItemList?.length >= 0) {
      const newCartItemList = [...cartItemList, item];
      asyncStorage.storeDataObject(USER_CART_LIST_KEY, newCartItemList);
    } else {
      asyncStorage.storeDataObject(USER_CART_LIST_KEY, [item]);
    }
  } catch (error) {
    console.log("Error while adding item to cart - ", error);
  }
};

export const removeFromCart = async (username, item) => {
  try {
    const USER_CART_LIST_KEY = getUserCartKey(username);
    let cartItemList = await fetchFromCart(username);
    if (cartItemList) {
      cartItemList = cartItemList?.filter((i) => i.name !== item.name);
      await asyncStorage.storeDataObject(USER_CART_LIST_KEY, cartItemList);
    }
  } catch (error) {
    console.log("Error while removing item from cart - ", error);
  }
};

export const updateCartBadge = async (username, setBadgeItemCount) => {
  const USER_CART_LIST_KEY = getUserCartKey(username);
  const cartItemList = await fetchFromCart(username);
  setBadgeItemCount(cartItemList?.length);
};
