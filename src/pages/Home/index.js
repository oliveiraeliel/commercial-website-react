import React from "react";
import Box from "../../components/Box";
import Navbar from "../../containers/Navbar";
import Carousel from "react-elastic-carousel";
// import Item from 'react-elastic-carousel'

import {
  Welcome,
  Container,
  WelcomeText,
  SideImage,
  Section,
  // Carousel,
  Item,
} from "./styles";

export default function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 840, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 1230, itemsToShow: 3 },
  ];

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <WelcomeText>
            <Welcome>Ji.shirts</Welcome> <span>your sports shirt store </span>
          </WelcomeText>
          <SideImage src="https://www.footyrenders.com/render/profile-10-neymar.png"></SideImage>
        </Container>
      </Section>
      <Section style={{ backgroundColor: "var(--color-dark-purple)" }}>
        <h1>On Sale</h1>

        <Carousel itemsToShow={1} breakPoints={breakPoints}>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              onSale={true}
              newPrice="R$ 80"
            />
          </Item>
          <Item>
            <Box
              name="Black T-shirt"
              price="120"
              url="https://www.pngplay.com/wp-content/uploads/12/Crew-Neck-T-Shirt-Download-Free-PNG.png  "
              onSale={true}
              newPrice="R$ 80"
            />
          </Item>
        </Carousel>
      </Section>
    </>
  );
}
