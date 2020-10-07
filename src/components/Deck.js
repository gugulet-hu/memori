import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Timer from 'react.timer';

//* Import images
import img1 from "../img/front-1.png";
import img2 from "../img/front-2.png";
import img3 from "../img/front-3.png";
import img4 from "../img/front-4.png";
import img5 from "../img/front-5.png";
import img6 from "../img/front-6.png";
import img7 from "../img/front-7.png";
import img8 from "../img/front-8.png";
import img9 from "../img/front-9.png";
import img10 from "../img/front-10.png";

class Deck extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               front: [
                    img1,
                    img2,
                    img3,
                    img4,
                    img5,
                    img6,
                    img7,
                    img8,
                    img9,
                    img10,
               ],
               flipped: "", //* Keep track of which card was flipped.
               previousFlip: "", //* Keep track of which card was flipped last.
               paired: 0, //* Keep track of how many pairs have been solved.
          };
          this.shuffle = this.shuffle.bind(this); 
          this.clock = this.clock.bind(this);
     }

     shuffle() { //* Method to shuffle the deck
          let cards = [...this.state.front, ...this.state.front];
          let i, j, k;

          for (i = cards.length - 1; i > 0; i--) { //* Array randomiser
               j = Math.floor(Math.random() * i);
               k = cards[i];
               cards[i] = cards[j];
               cards[j] = k;
          }

          this.setState({ front: cards });
     }

     clock() { //* Method to time the session
          setTimeout(timeout,32000)

          function timeout() {
               alert("You lose! Try again");
               window.location.reload(false);
          }
     }

     componentDidMount() { //* Run these two methods when the component is loaded
          window.addEventListener("load", this.shuffle);
          window.addEventListener("load", this.clock);
     }

     flip = (clicked, showCard) => { //* Flip over the card
          clicked.style.display = "none";
          showCard.style.display = "flex";
     };

     solved = (previousFlip, clicked) => { //* Make the solved pairs disappear
          previousFlip.style.display = "none";
          clicked.style.display = "none";
     };

     unflippedCheck = (clicked, showCard) => { //* Check the unflipped cards if they match
          if (
               (showCard.src === this.state.previousFlip.src ||
                    this.state.previousFlip.src === clicked.src) &&
               this.state.previousFlip !== ""
          ) {
               this.solved(this.state.previousFlip, clicked);
               this.setState({ flipped: "" });
               this.setState((prevState) => ({
                    paired: prevState.paired + 1,
               }));
               console.log(this.state.paired);
          } else {
               this.setState({ previousFlip: showCard });
          }
     }; //! Still some issues with cars not disappearing once paired.

     flippedCheck = (clicked) => { //* Check the already flipped cards if they match
          if (
               this.state.previousFlip.src === clicked.src &&
               this.state.previousFlip !== ""
          ) {
               this.solved(this.state.previousFlip, clicked);
               this.setState({ flipped: "" });
               this.setState((prevState) => ({
                    paired: prevState.paired + 1,
               }));
               console.log(this.state.paired);
          } else {
               this.setState({ previousFlip: clicked });
          }
     };

     onClick = (e) => { //* Method to to run on onclicking a card. Calls the pair checks
          console.log("click");
          let clicked = e.target;
          let showCard = e.target.nextSibling;

          if (this.state.paired > 8) {
               alert("Congratulations, you have won the game!");
               window.location.reload(false);
          } else if (showCard !== null) {
               this.flip(clicked, showCard);
               this.unflippedCheck(clicked, showCard);
          } else {
               this.flippedCheck(clicked, showCard);
          }
     };

     render() {
          return (
               <div class="row text-center my-3" id="deck">
                    <div class="col-md-12 my-2">
                         <Link to="/">Instructions</Link>
                    </div>
                    <div class="col-md-12 my-3 timer">
                         <Timer countDown startTime={30} />
                    </div>
                    {this.state.front.map((image) => (
                         <Card img={image} click={this.onClick} />
                    ))}
               </div>
          );
     }
}

export default Deck;
