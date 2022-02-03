import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Routes_ from "./routes";

export default function App() {
  return (
    <>
      <Routes_ />
      <Footer />
    </>
  );
}
