import React from "react";
import Start from "./Start";

//* Importing in media
import Play from '../img/start-100x100.png';
import Pair from '../img/pair-100x100.png';
import Countdown from '../img/timer-100x100.png';

function Instructions() {
     return (
          <>
               <div class="row text-center my-5" id="instructions">
                    <div class="col-md-4 p-5">
                         <h2>Start</h2>
                         <img src={Play} alt="Start icon" />
                         <p>Click the start button below.</p>
                    </div>

                    <div class="col-md-4 p-5">
                         <h2>Pair</h2>
                         <img src={Pair} alt="Pairing icon" />
                         <p>Flip cards over and pair matching cards.</p>
                    </div>

                    <div class="col-md-4 p-5">
                         <h2>Time</h2>
                         <img src={Countdown} alt="Timer icon" />
                         <p>Don't run out of time to win the game!</p>
                    </div>
                    <div class="col-md-12 my-5">
                         <Start text="Start game" />
                    </div>
               </div>
          </>
     );
}

export default Instructions;
