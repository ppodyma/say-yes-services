import Button from '@material-ui/core/Button';
import React from 'react';
import './Style.scss';
import SVG from 'react-inlinesvg';

function Main() {
  return (
    <div className="mainBackground">
     <div className="darkBackground"></div>
     <div className="mainText">
        <div>
          {/* Profesjonalizm | Doświadczenie | Szkolenia */}
          {/* Działamy niezawodnie  */}
        </div>
        <a href="#aboutSection">
          <Button variant="outlined" className="contactButton">Dowiedź się o nas więcej</Button>
        </a>
     </div>
     <div className="logo">
         {/* <img src={require("./../../assets/imgs/logo.svg")}  /> */}
         <SVG
          src={require("./../../assets/imgs/logo.svg")}
        />
         <br />
         Napędzani pasją | Działamy niezawodnie
     </div>
    </div>
  );
}

export default Main;
