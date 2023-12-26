import React, { useState, useEffect } from "react";
import "../styles/Frontpage.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useGlobalContext } from "../utils/context";
import { useNavigate, Link } from "react-router-dom";

export default function Filteritems() {
  // const navigate = useNavigate();
  const { allproducts, setfilterproducts, setsearchedproducts, current } =
    useGlobalContext();
  // const isloggedin = async () => {
  //   if (!current) {
  //     navigate("/login");
  //   }
  // };

  // useEffect(() => {
  //   isloggedin();
  // }, []);
  let minval = allproducts[0].price;
  console.log(allproducts);
  allproducts.forEach((pro) => {
    if (pro.price < minval) minval = pro.price;
  });
  let maxval = allproducts[0].price;
  allproducts.forEach((pro) => {
    if (pro.price > maxval) maxval = pro.price;
  });
  console.log(maxval);
  const [value, setValue] = useState([minval, maxval]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    const [minValue, maxValue] = newValue;
    const filProducts = allproducts.filter((product) => {
      const productPrice = product.price; // Replace with the actual property name for the product price
      return productPrice >= minValue && productPrice <= maxValue;
    });
    console.log(filProducts);
    setfilterproducts(filProducts);
    setsearchedproducts(filProducts);
  };
  return (
    <>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton style={{ background: "black" }}>
            <ListItemText primary="Price" style={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <Box sx={{ width: 200, mx: "1em" }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={100}
            marks
            min={minval}
            max={maxval}
          />
        </Box>
      </List>
      <Divider />
    </>
  );
}
