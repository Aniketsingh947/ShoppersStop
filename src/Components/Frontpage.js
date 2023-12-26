import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
// import axios from "axios";
// import allproducts from "./data";
import "../styles/Frontpage.css";
// import Card from "./Card";
import ProductCard from "./Productcard";
import { useGlobalContext } from "../utils/context";
const itemsPerPage = 10;
export default function Frontpage() {
  const { searchedproducts } = useGlobalContext();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = searchedproducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchedproducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchedproducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductCard allusers={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
