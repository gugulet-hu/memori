import React from "react";
import Logo from "../img/logo-100x100.png";

function Header() {
     return (
          <div class="row text-center">
               <div class="col-md-12 mt-5">
                    <img src={Logo} alt="Memori Logo" />
                    <h1>memori</h1>
                    <p>A game by g*</p>
               </div>
          </div>
     );
}

export default Header;
