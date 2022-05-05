import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../Api";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import Button from "../../components/Button/index";

import { SaleBoxBody, Img, Info, ImgBox, OnSalePrice, Price } from "./styles";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(null);

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const user = JSON.parse(localStorage.getItem("user"));

  function handleClickBuy() {
    if (user._id === undefined) {
      alert("You have to login to do this!");
      window.location.href = "/login";
      return;
    }
    let a = window.confirm(`Are you sure about this?`);

    if (!a) {
      return;
    }

    api
      .post("/operation", {
        product: product._id,
        buyer: user._id,
        unityCost: +product.cost,
        quantity: 1,
        unityPrice: price,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    api
      .get(`/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        if (res.data.onSale) {
          setPrice(res.data.onSalePrice);
          return;
        }
        setPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SaleBoxBody>
      <ImgBox>
        <Img src={product.imageURL}></Img>
      </ImgBox>
      <Info>
        <h1>{capitalizeFirstLetter(product.name)}</h1>
        <Price onSale={product.onSale}>R$ {product.price}</Price>
        <OnSalePrice style={{ display: product.onSale ? "block" : "none" }}>
          R$ {product.onSalePrice}
        </OnSalePrice>
        <Button
          btnWidth="20rem"
          btnHeight="40px"
          text="Buy"
          txtColor="--color-white"
          btnColor="--color-dark-purple"
          onClick={handleClickBuy}
          txtSize="1.5rem"
        />
      </Info>
    </SaleBoxBody>
  );
}
