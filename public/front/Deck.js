import React from "react";
import Card from "../../../components/Card";
// import Timer from "./Timer";


class Deck extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               front: [
                    "front-1.png",
                    "front-2.png",
                    "front-3.png",
                    "front-4.png",
                    "front-5.png",
                    "front-6.png",
                    "front-7.png",
                    "front-8.png",
                    "front-9.webp",
                    "front-10.png",
               ],
               flipped: null
          };
          this.shuffle = this.shuffle.bind(this);
     }

     shuffle() {
          let cards = [...this.state.front, ...this.state.front];
          let i, j, k;

          for (i = cards.length - 1; i > 0; i--) {
               j = Math.floor(Math.random() * i);
               k = cards[i];
               cards[i] = cards[j];
               cards[j] = k;
          }
          console.log(cards);

          this.setState({ front: cards });
     }

     componentDidMount() {
          window.addEventListener("load", this.shuffle);
     }

     // onClick = (e) => {
     //  if (this.state.flipped === null) {
     //   this.setState({ flipped: e.target.src });
     //  } else if (this.state.flipped == e.target.src) {
     //   this.setState({ flipped: null});
     //   e.target.
     //  } else {
     //   this.setState({ flipped: null});
     //  }
     // }

     render() {
          return (
               <div
                    class="row text-center my-3"
                    id="deck"
               >
                    {this.state.front.map( image => <Card img={image} />)}
               </div>
          );
     }
}

export default Deck;

// click={onClick}