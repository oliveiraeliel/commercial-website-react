import React from "react";

import { Body, Text, Header } from "./styles";

export default function PopUp(props) {
  return (
    <Body>
      <div className="body">
        <Header>{props.title}</Header>
        <Text>
          <div className="text">{props.text}</div>
        </Text>
      </div>
    </Body>
  );
}
