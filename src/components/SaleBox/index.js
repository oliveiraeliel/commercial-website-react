// import React from "react";
// import { api } from "../../Api";
// import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
// import Button from "../Button";

// import { SaleBoxBody, Img, Info, ImgBox, OnSalePrice, Price } from "./styles";

// export default function SaleBox(props) {
//   const user = JSON.parse(localStorage.getItem("user"));

//   function handleClickBuy() {
//     if (user === undefined) {
//       alert("You have to login to do this!");
//       window.location.href = "/login";
//       return;
//     }
//     let a = window.confirm(`Are you sure about this?`);
//     if (!a) {
//       return;
//     }
//     api.post("/operation", {_id});
//   }

//   return (
//     <SaleBoxBody>
//       <ImgBox>
//         <Img src={props.imageURL}></Img>
//       </ImgBox>
//       <Info>
//         <h1>{capitalizeFirstLetter(props.name)}</h1>
//         <Price _onSale={props._onSale}>R$ {props.price}</Price>
//         <OnSalePrice style={{ display: props._onSale ? "block" : "none" }}>
//           R$ {props._onSalePrice}
//         </OnSalePrice>
//         <Button
//           btnWidth="20rem"
//           btnHeight="40px"
//           text="Buy"
//           txtColor="--color-white"
//           btnColor="--color-dark-purple"
//           onClick={handleClickBuy}
//           txtSize="1.5rem"
//         />
//       </Info>
//     </SaleBoxBody>
//   );
// }
