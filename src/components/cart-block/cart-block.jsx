import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from '../cart-menu/cart-menu'
import { ItemsInCart } from '../items-in-cart/items-in-cart'
import "./cart-block.css";
import { calcTotalPrice } from "../utils";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {

  const navigate = useNavigate()

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

  const items = useSelector((state) => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate('/order')
  }, [navigate])

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt color="white" size={25} className="cart-icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />
      {totalPrice > 0 ? <span className="total-price">{totalPrice} руб.</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
