import React from "react";
import { AiOutlineWarning, AiOutlineShoppingCart } from "react-icons/ai";

export default function Error({ type }) {
  let icon;
  let text;
  if (type === "network") {
    icon = <AiOutlineWarning className="error-svg" />;
    text = <h2> Please check your internet connection </h2>;
  }
  if (type === "empty") {
    icon = <AiOutlineShoppingCart className="cart-svg" />;
    text = <h2> Your Cart is empty </h2>;
  }
  return (
    <main className="center">
      {icon}
      {text}
    </main>
  );
}
