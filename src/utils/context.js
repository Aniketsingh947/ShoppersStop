import React, { useState, useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";
import axios from "axios";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [allproducts, setallproducts] = useState([]);
  const [filterproducts, setfilterproducts] = useState([]);
  const [searchedproducts, setsearchedproducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    console.log("has mounted");
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const newArray = response.data.products.map((obj) => ({
          ...obj,
          amount: 1,
        }));
        setfilterproducts(newArray);
        setallproducts(newArray);
        setsearchedproducts(newArray);
        console.log(newArray);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };
  const Addtocart = (addproduct) => {
    dispatch({ type: "ADD", payload: addproduct });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        current,
        filterproducts,
        allproducts,
        searchedproducts,
        setsearchedproducts,
        setfilterproducts,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        setCurrent,
        Addtocart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
