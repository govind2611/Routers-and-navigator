import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
  let navigate = useNavigate();
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="btn">
        <button className="apple" onClick={() => navigate("apple")}>Apple</button>
        <button className="oneplus" onClick={() => navigate("oneplus")}>Oneplus</button>
        <button className="samsung" onClick={() => navigate("samsung")}>Samsung</button>
      </div>
       
      <Outlet />
      <div className="btn2">
      <button className="back" onClick={() => navigate(-1)}>Go Back</button>
      <button className="next" onClick={() => navigate(+1)}>Go Next</button>
      </div>
     
    </div>
  );
};

export default Products;
