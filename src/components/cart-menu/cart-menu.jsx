import React from "react";
import "./cart-menu.css";
import { calcTotalPrice } from "../utils";
import { Button } from "../button/button";
import { CartItem } from "../cart-item/cart-item";

export const CartMenu = ({ items, onClick }) => {

  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {
          items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Корзина пуста'
        }
      </div>
      {
        items.length > 0 ?
          <div className="cart-menu__arrange">
            <div className="cart-menu__total-price">
              <span>Итого:</span>
              <span>{calcTotalPrice(items)} руб.</span>
            </div>
            <Button size="m" onClick={onClick} type={'primary'}>Оформить заказ</Button>
          </div>
          : null
      }
    </div>
  );
};
