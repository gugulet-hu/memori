import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//* Importing created components
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Deck from "./components/Deck";

class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     render() {
          return (
               <BrowserRouter>
                    <div class="container-fluid">
                         <header>
                              <Header />
                         </header>
                         <Route
                              exact={true}
                              path="/"
                              component={Instructions}
                         />
                         <Route exact={true} path="/deck" component={Deck} />
                    </div>
                    {/* <footer class="mb-3">
                         <a href="https://gugulet.hu">gugulet.hu</a>
                    </footer> */}
               </BrowserRouter>
          );
     }
}

export default App;
