import React from 'react';
import './Style.scss'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

function Second() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="secondSection">

        <img className="solar" src={require("./../../assets/imgs/solar3.png")}  width={400} />
        {/* <img className="solar2" src={require("./../../assets/imgs/book.png")}  width={200} /> */}
        <div className="solarContainer">
          <div className="solarTitle">Posiadamy obszerną wiedze z zakresu <br /> systemów fotowoltaicznych i słonecznych systemach grzewczych</div>
          <div className="solarDescription">
            Wiele zadowolonych klientów, masa przeprowadzonych szkoleń jest dowodem na to, że świadczymy usługi najwyższej jakości.
            <br />
            Na rynku działamy już od dłuższego czasu, widzieliśmy jak ta technologia się zmienia, <br /> dzięki czemu możemy zaproponować najlepsze rozwiązanie w rozsądnej cenie.
            {/* <MenuBookIcon /> */}
            <br />
            <br />
            Dodatkowo napisaliśmy książkę "Praktyczny poradnik instalatora: systemy fotowoltaiczne i słoneczne systemy grzewcze", 
            <br />która pomogła wielu osobom zglębić tajniki praktycznej wiedzy. <br />
            Jeśli jesteś zainteresowany to kliknij w poniższy przycisk, aby wyświetlić tytuł.
          </div>
          <div className="actionButton">
            <button className="bookButton" onClick={handleOpen}>Sprawdź książkę</button>
          </div>
        </div>
        <div className="blur"></div>

        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img className="solar2" src={require("./../../assets/imgs/book.png")}  width={500} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Second;
