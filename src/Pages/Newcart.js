import React from "react";
// import "./Newcart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useGlobalContext } from "../utils/context";
import { useNavigate, Link } from "react-router-dom";
const Newcart = () => {
  const { remove, toggleAmount } = useGlobalContext();
  const { cart, total, clearCart, amount } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <div className="col d-flex justify-content-center align-items-center mt-10 p-4">
          <Link to="/">
            <a
              href="catalog.html"
              className="btn btn-dark mb-4 btn-lg pl-5 pr-5"
            >
              Continue shopping
            </a>
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
              <i className="text-danger font-weight-bold">{amount}</i> items in
              your cart
            </p>
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Product</th>
                  <th style={{ width: "12%" }}>Price</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "16%" }}></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(
                  ({ id, thumbnail, title, price, amount, category }) => (
                    <tr key={id}>
                      <td data-th="Product">
                        <div className="row">
                          <div className="col-md-3 text-left">
                            <img
                              src={thumbnail}
                              alt=""
                              className="img-fluid d-none d-md-block rounded mb-2 shadow"
                            />
                          </div>
                          <div className="col-md-9 text-left mt-sm-2">
                            <h4>{title}</h4>
                            <p className="font-weight-light">{category}</p>
                          </div>
                        </div>
                      </td>
                      <td data-th="Price">${price}</td>
                      <td data-th="Quantity">
                        <div>
                          <button
                            className="amount-btn"
                            onClick={() => toggleAmount(id, "inc")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                            </svg>
                          </button>
                          {/* amount */}
                          <p className="amount">
                            {"   "}
                            <span></span>
                            {amount}
                          </p>
                          {/* decrease amount */}
                          <button
                            className="amount-btn"
                            onClick={() => toggleAmount(id, "dec")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="actions" data-th="">
                        <div className=" text-right justify-content-centre align-items-centre">
                          <button
                            className="btn btn-white border-secondary bg-white btn-md mb-2"
                            onClick={() => remove(id)}
                          >
                            <DeleteForeverOutlinedIcon sx={{ color: "red" }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <div className="float-right text-right d-flex justify-content-end">
              <p>
                <span className="fs-2">Subtotal : </span>
                <span className="fs-2">${total}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 d-flex align-items-center justify-items-centre">
          <div class="row">
            <div class="col-md-6">
              <Link to="/">
                <a
                  href="catalog.html"
                  className="btn btn-secondary mb-4 btn-md pl-5 pr-5"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
                </a>
              </Link>
            </div>
            <div class="col-md-6  d-flex justify-content-end">
              <a
                href="catalog.html"
                className="btn btn-dark mb-4 btn-md pl-5 pr-5"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newcart;
