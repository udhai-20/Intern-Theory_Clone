import "./CourseCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/AppReducer/action";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function CourseCard({ data }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };
  return (
    <>
      <div className="c-card-container">
        <div className="c-card-wrapper">
          <div className="c-card-img-box">
            <img src={data.image} alt="" className="c-card-img" />
          </div>
          <div className="c-card-desc">
            <h2 className="caurse-name">{data.name}</h2>
            <p className="curse-desc">{data.desc}</p>
          </div>
        </div>
        <div className="c-card-price-wrapper">
          <div className="c-card-odlprice">
            <span className="c-oldprice">₹{data.oldPrice}</span>
            <p className="c-card-price">{data.newPrice}₹</p>
          </div>
          <p className="c-card-emi">{data.emi}</p>
          <div className="c-card-btn">
            <button className="c-btn c-btn-light">KNOW MORE</button>
            <button onClick={() => handleAddToCart()} className="c-btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
