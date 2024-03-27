import React from "react";

const useLocalStorage = (key, defaultValue) => {
  const [storageValue, setStorageValue] = React.useState(() => {
    try {
      const value = localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });
  const setValue = (newValue) => {
    try{
      localStorage.setItem(key, JSON.stringify(newValue))
    }catch (error) {
      console.log(error)
    }
    setStorageValue(newValue)
   }
  return [storageValue, setValue]
}
export default useLocalStorage;