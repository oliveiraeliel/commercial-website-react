import React from "react";
import { Section, Item } from "./styles";

export default function Admin() {
    document.title = "Admin"
  return (
    <Section>
      <Item href="/add-product">Add product</Item>
      <Item href="/update-product">Update product</Item>
    </Section>
  );
}
