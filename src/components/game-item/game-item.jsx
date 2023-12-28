import React from "react";
import { useDispatch } from "react-redux";
import { GameBuy } from "../game-buy/game-buy";
import { GameCover } from "../game-cover/game-cover";
import { GameGenre } from "../game-genre/game-genre";
import "./game-item.css";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/game/gameSlice";

export const GameItem = ({ game }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(setCurrentGame(game))
    navigate(`/games/${game.title}`)
  }

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map(genre => (<GameGenre genre={genre} key={genre} />))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} key={game.id} />
        </div>
      </div>
    </div>
  );
};
