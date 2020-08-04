import React from "react";
import Back from "../img/back-510x710.png";

const Card = (props) => {
     return (
          <div class="col-md-3 my-3">
               <img
                    src={Back} //* Create the cards lying down
                    alt="A back cover of a card in the memori game."
                    onClick={props.click}
                    style={{ display: "flex" }}
               />
               <img
                    src={props.img} //* Create the flipped cards (hidden on load)
                    alt="A card in the memori game"
                    onClick={props.click}
                    style={{ display: "none" }}
               />
          </div>
     );
};

export default Card;
