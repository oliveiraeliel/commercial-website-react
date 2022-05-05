import React, { useEffect, useState } from "react";
import Box from "../../components/Box";
import Navbar from "../../components/Navbar";
import Carousel from "react-elastic-carousel";
import { api } from "../../Api";

import {
  Welcome,
  Container,
  WelcomeText,
  SideImage,
  Section,
  Item,
  Catalog,
  CatalogBody,
  CatalogItem,
} from "./styles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [products, setProducts] = useState([]);
  const [logged, setLogged] = useState(false);
  const [showOnSale, setShowOnSale] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }
    setLogged(true);
  }, []);

  document.title = "Ji.shirts";
  useEffect(() => {
    api
      .get("/product")
      .then((res) => {
        setProducts(res.data);
        localStorage.setItem("products", JSON.stringify(res.data));
        res.data.map((row) => {
          if (row.onSale) setShowOnSale(true);
        });
      })
      .catch((err) => console.log("err"));
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 840, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 1230, itemsToShow: 3 },
  ];

  return (
    <>
      <Section>
        <Navbar
          logged={logged}
          name={logged ? capitalizeFirstLetter(user.name) : ""}
        />
        <Container>
          <WelcomeText>
            <Welcome>Ji.shirts</Welcome> <span>your sports shirt store </span>
          </WelcomeText>
          <SideImage src="https://www.footyrenders.com/render/profile-10-neymar.png"></SideImage>
        </Container>
      </Section>
      <Section
        style={{
          backgroundColor: "var(--color-dark-purple)",
          display: showOnSale ? "block" : "none",
        }}
        id="on-sale"
      >
        <h1>On Sale</h1>

        <Carousel itemsToShow={1} breakPoints={breakPoints}>
          {products.map((row) => {
            if (!row.onSale) {
              return;
            }
            return (
              <Item>
                <Box
                  name={capitalizeFirstLetter(row.name)}
                  price={row.price}
                  _onSale={true}
                  _onSalePrice={`R$ ${row.onSalePrice}`}
                  url={row.imageURL}
                  _id={row._id}
                />
              </Item>
            );
          })}
        </Carousel>
      </Section>
      <CatalogBody id="catalog">
        <h1>Catalog</h1>
        <Catalog>
          {products.map((row) => {
            if (row.onSale) {
              return;
            }
            return (
              <CatalogItem>
                <Box
                  name={capitalizeFirstLetter(row.name)}
                  price={row.price}
                  url={row.imageURL}
                  _id={row._id}
                />
              </CatalogItem>
            );
          })}
        </Catalog>
      </CatalogBody>
    </>
  );
}
