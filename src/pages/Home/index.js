import React, { useEffect, useState } from "react";
import Box from "../../components/Box";
import Navbar from "../../containers/Navbar";
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

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (user) setLogged(true);
  }, []);

  document.title = "Ji.shirts";
  useEffect(() => {
    api
      .get("/product")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 840, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 1230, itemsToShow: 3 },
  ];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
        style={{ backgroundColor: "var(--color-dark-purple)" }}
        id="on-sale"
      >
        <h1>On Sale</h1>

        <Carousel itemsToShow={1} breakPoints={breakPoints}>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              _onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              _onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              _onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              _onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              _onSale={true}
              newPrice="R$ 80"
            />
          </Item>
        </Carousel>
      </Section>
      <CatalogBody id="catalog">
        <h1>Catalog</h1>
        <Catalog>
          <CatalogItem>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
            />
          </CatalogItem>
          <CatalogItem>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
            />
          </CatalogItem>
          <CatalogItem>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
            />
          </CatalogItem>
          <CatalogItem>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
            />
          </CatalogItem>
        </Catalog>
      </CatalogBody>
    </>
  );
}
