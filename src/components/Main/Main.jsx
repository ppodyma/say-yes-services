import Button from '@material-ui/core/Button';
import React from 'react';
import './Style.scss'

function Main() {
  return (
    <div className="mainBackground">
     <div className="darkBackground"></div>
     <div className="mainText">
        <div>
          Profesjonalizm | Doświadczenie | Szkolenia
        </div>
        <a href="#aboutSection">
          <Button variant="outlined" className="contactButton">Dowiedź się o nas więcej</Button>
        </a>
     </div>
     <div className="logo">
         <img src={require("./../../assets/imgs/logo3.png")}  />
         <br />
         Say Yes Services
     </div>
    </div>
  );
}

export default Main;
