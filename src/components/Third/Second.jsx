import React from 'react';
import './Style.scss'
import TuneIcon from '@material-ui/icons/Tune';
import DescriptionIcon from '@material-ui/icons/Description';
import BuildIcon from '@material-ui/icons/Build';


function Third() {
  return (
    <div className="thirdSection">
        {/* <img src={require("./../../assets/imgs/solar3.png")} width={500}  /> */}
        <div className="backgroundContainer"></div>
        <div className="description">
          <div className="title">Dobierzemy ogrzewanie do Twojego domu</div>
          <div className="textContainer">
            <div className="iconElement">
              <TuneIcon className="Icon" fontSize="large" />
              <br />
              <div>Dobierzemy odpowiednie rozwiązanie</div>
            </div>
            <div className="iconElement">
              <DescriptionIcon className="Icon" fontSize="large" />
              <br />
              <div>Zaproponujemy rekomendowane propozycje urzadzeń wraz z ceną</div>
            </div>
            <div className="iconElement">
              <BuildIcon className="Icon" fontSize="large" />
              <br />
              <div>Przygotujemy szczegółowy kosztorys wraz z montażem</div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Third;
