import React, { useEffect } from "react";
import { Section, Item } from "./styles";

export default function Admin() {
  document.title = "Admin";
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user.email !== process.env.REACT_APP_ADMIN) {
      window.location.href = "/";
      return;
    }
  }, []);
  return (
    <Section>
      <Item href="/add-product">Add product</Item>
      <Item href="/update-product">Update product</Item>
    </Section>
  );
}
