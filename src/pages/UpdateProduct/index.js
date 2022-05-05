import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Files from "react-files";

import { api } from "../../Api";

import { Section, Form, Img, Input, NumBox } from "../AddProduct/styles";
import Button from "../../components/Button";

export default function UpdateProduct() {
  document.title = "Upload product";

  const [products, setProducts] = useState([]);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [cost, setCost] = useState(null);
  const [brand, setBrand] = useState(null);
  const [img, setImg] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [_id, set_Id] = useState(null);
  const [onSale, setOnSale] = useState(false);
  const [onSalePrice, setOnSalePrice] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user.email !== process.env.REACT_APP_ADMIN) {
      window.location.href = "/";
      return;
    }
    api
      .get("/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));

    console.log(products);
  }, []);

  function handleClick() {
    const image = new FormData();
    if (img !== null) {
      image.append("file", img);
      image.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
      axios
        .post("https://api.cloudinary.com/v1_1/dd2cjxbui/image/upload", image)
        .then((res) => {
          api
            .patch("/product/image", {
              image: res.data.secure_url,
              _id: _id,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });
    }
    if (
      name === null ||
      price === null ||
      cost === null ||
      brand === null ||
      quantity === null
    ) {
      return;
    }
    if (onSale === true && onSalePrice === null) {
      return;
    }
    api
      .patch("/product", {
        name: name,
        price: +price,
        cost: +cost,
        brand: brand,
        onSale: onSale,
        onSalePrice: +onSalePrice,
        _id: _id,
        quantity: +quantity,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Section>
      <Form>
        <Img src={img != "" ? img.preview.url : imgURL}></Img>
        <Input>
          <Files
            className="files-dropzone"
            accepts={[".png", ".jpg", ".jpeg"]}
            onChange={(e) => setImg(e[0])}
            multiple
            maxFileSize={10000000}
            minFileSize={0}
            clickable
            style={{
              background: "var(--color-lapis-lazuli)",
              color: "white",
              width: "30rem",
              height: "2rem",
              textAlign: "center",
              paddingTop: "1rem",
            }}
          >
            Click to add the product image
          </Files>
        </Input>
        <Input>
          <TextField
            label="Product"
            select
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "30rem" }}
          >
            {products.map((option) => (
              <MenuItem
                value={option.name}
                onClick={() => {
                  setName(option.name);
                  setPrice(option.price);
                  setCost(option.cost);
                  setQuantity(option.quantity);
                  setBrand(option.brand);
                  set_Id(option._id);
                  setOnSale(option.onSale);
                  setOnSalePrice(option.onSalePrice);
                  setImgURL(option.imageURL);
                  setImg("");
                }}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Input>
        <Input>
          <TextField
            type="text"
            step="any"
            label="Name"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Input>
        <Input>
          <NumBox>
            <TextField
              type="number"
              step="any"
              label="Price"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Cost"
              type="number"
              step="any"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <TextField
              label="Quantity"
              variant="standard"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </NumBox>
        </Input>
        <Input>
          <TextField
            label="Brand"
            variant="standard"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Input>

        <Input>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={onSale} />}
              label="On sale"
              onChange={() => setOnSale(!onSale)}
            />
          </FormGroup>
        </Input>
        <Input style={{ display: onSale ? "block" : "none" }}>
          <TextField
            label="On sale price"
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={onSalePrice}
            onChange={(e) => {
              setOnSalePrice(e.target.value);
            }}
          />
        </Input>
        <Input>
          <Button
            btnWidth="30rem"
            btnHeight="40px"
            text="Send"
            txtColor="--color-white"
            btnColor="--color-dark-purple"
            onClick={handleClick}
            txtSize="1.5rem"
          />
        </Input>
      </Form>
    </Section>
  );
}
