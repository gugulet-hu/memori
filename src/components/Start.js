import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Start(props) {
     return (
          <Button variant="success">
               <Link to="/deck">
                    <p class="xlg px-3">{props.text}</p>
               </Link>
          </Button>
     );
}

export default Start;
