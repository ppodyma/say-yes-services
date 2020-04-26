import React from 'react';
import './Style.scss'
import MenuBookIcon from '@material-ui/icons/MenuBook';


function Second() {
  return (
    <div className="secondSection">

        <img className="solar" src={require("./../../assets/imgs/solar3.png")}  width={400} />
        <img className="solar2" src={require("./../../assets/imgs/book.png")}  width={200} />
        <div className="solarContainer">
          <div className="solarTitle">Bardzo dobrze znamy się na systemach fotowoltaicznych i słonecznych systemach grzewczych</div>
          <div>
            Wiele zadowolonych klientów, masa przeprowadzonych szkoleń jest dowodem na to, że świadczymy usługi najwyższej jakości.
            <br />
            Na rynku działamy już od dłuższego czasu, widzieliśmy jak ta technologia się zmienia, dzięki czemu możemy zaproponować najlepsze rozwiązanie w rozsądnej cenie.
            <MenuBookIcon />
            <br />
            Dodatkowo napisaliśmy książkę "Praktyczny poradnik instalatora: systemy fotowoltaiczne i słoneczne systemy grzewcze", która pomogła wielu osobom zglębić tajniki praktycznej wiedzy.
          </div>
        </div>
        <div className="blur"></div>
    </div>
  );
}

export default Second;
