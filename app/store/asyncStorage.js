/**
 * This file contains helper functions to store and retrieve key-values from async storage.
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(
      `Error occured while saving to async storage - key=${key}, value=${value}. Message stack - ${e}`
    );
  }
};

const storeDataObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(
      `Error occured while saving object to async storage - key=${key}, value=${value}. Message stack - ${e}`
    );
  }
};

const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(
      `Error occured while fetching from async storage - key=${key}. Message stack - ${e}`
    );
  }
};

const getDataObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(
      `Error occured while fetching object from async storage - key=${key}. Message stack - ${e}`
    );
  }
};

const removeData = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(
      `Error occured while deleting from async storage - key=${key}. Message stack - ${e}`
    );
  }
};

export default {
  storeData,
  storeDataObject,
  getData,
  getDataObject,
  removeData,
};
