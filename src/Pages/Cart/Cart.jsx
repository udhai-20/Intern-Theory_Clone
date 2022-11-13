import "./Cart.css";
import React, { useEffect, useRef, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);
  const sum = useRef(0);
  const getCart = () => {
    axios
      .get("https://internjob-app.herokuapp.com/cart")
      .then((res) => {
        setFlag(true);
        setCart(res.data);
      })
      .catch((err) => {});
  };
  const deleteCartFun = (id) => {
    axios
      .delete(` https://internjob-app.herokuapp.com/cart/${id}`)
      .then((res) => {
        getCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (cart.length > 0) {
    cart.map((el) => {
      sum.current += Number(el.newPrice);
    });
    console.log(sum.current);
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      {flag && (
        <div className="cart-wrapper">
          <p className="bold-text bold-text-mb20">Cart</p>
          <div className="cart-container">
            {cart.length == 0 && flag ? (
              <div className="chekcout-btn-cont">
                <p className="bold-text">The cart is empty</p>
                <Link to="/courses">
                  <button className="checkout-btn">CHEKOUT OUR COURSES</button>
                </Link>
              </div>
            ) : (
              <div className="cart-items-wrapper">
                {cart.map((item) => (
                  <div key={item.id}>
                    <CartItem deleteCartFun={deleteCartFun} item={item} />
                    <hr className="dashed" />
                  </div>
                ))}
                <div className="empty-cart-btn-cant">
                  <button className="c-btn">EMPTY CART</button>
                </div>
              </div>
            )}

            <div className="vertical-line"></div>
            <div className="cart-item-total-price">
              <div className="price-sm-text-cont">
                <p className="price-sm-text">Amount</p>

                <p className="price-sm-text">₹{sum.current} </p>
              </div>
              <div className="price-sm-text-cont">
                <p className="price-sm-text">CGST 9%</p>
                <p className="price-sm-text">₹3240</p>
              </div>
              <div className="price-sm-text-cont">
                <p className="price-sm-text">SGST 9%</p>
                <p className="price-sm-text">₹3240</p>
              </div>

              <div className="price-sm-text-cont price-sm-text-cont-bold">
                <p className="bold-text">Total</p>
                <p className="bold-text">
                  ₹ {cart.length > 0 ? sum.current + 6480 : 0}{" "}
                </p>
              </div>
              <div style={{ width: "100%" }}>
                {cart.length == 0 ? (
                  <Link to="/courses">
                    <button className="c-btn checkout-btn-90">CHECKOUT</button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      alert("Enrolled successfully");
                    }}
                    className="c-btn checkout-btn-90"
                  >
                    ENROLL
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
