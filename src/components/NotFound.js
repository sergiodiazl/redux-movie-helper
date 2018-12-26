import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';
import'./Button.css';
const NotFound = ({texts}) => (
  <div className="not-found">
    <h3>{texts["404"]}</h3>
    <div className="back-button">
    <Link to="/">
    <button >{texts["404Button"]}</button>
    </Link>
    </div>
  </div>
);

export default NotFound;