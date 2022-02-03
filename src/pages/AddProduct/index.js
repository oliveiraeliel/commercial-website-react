import axios from "axios";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Files from "react-files";

import { api } from "../../Api";

import { Form, Input, Img } from "./styles";
import Button from "../../components/Button";

export default function AddProduct() {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [cost, setCost] = useState(null);
  const [brand, setBrand] = useState(null);
  const [img, setImg] = useState(null);
  const [quantity, setQuantity] = useState(null);

  function handleClick() {
    const image = new FormData();
    if (img !== null) {
      image.append("file", img);
      image.append("upload_preset", "gqvcoina");
    }

    api
      .post("/product", {
        name: name,
        price: price,
        cost: cost,
        brand: brand,
        quantity: quantity,
      })
      .then((res) => {
        const _id = res.data.product_id;

        if (image !== null) {
          axios
            .post(
              "https://api.cloudinary.com/v1_1/dd2cjxbui/image/upload",
              image
            )
            .then((res) => {
              api
                .patch("/product/image", {
                  image: res.data.secure_url,
                  _id: _id,
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form>
      <Img src={img !== null ? img.preview.url : ""}></Img>
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
          id="standard-basic"
          label="Product Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Input>
      <Input>
        <TextField
          id="standard-basic"
          type="number"
          step="any"
          label="Price"
          variant="standard"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Input>
      <Input>
        <TextField
          id="standard-basic"
          label="Cost"
          variant="standard"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </Input>
      <Input>
        <TextField
          id="standard-basic"
          label="Brand"
          variant="standard"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </Input>
      <Input>
        <TextField
          id="standard-basic"
          label="Quantity"
          variant="standard"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
  );
}
