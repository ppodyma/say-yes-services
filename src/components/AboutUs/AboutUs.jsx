
import React from 'react';
import './Style.scss'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ApartmentIcon from '@material-ui/icons/Apartment';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ImageIcon from '@material-ui/icons/Image';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import SchoolIcon from '@material-ui/icons/School';
import TimelineIcon from '@material-ui/icons/Timeline';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ProjectIcon from '../../assets/imgs/icon.png'
import SVG from 'react-inlinesvg';
import SwipeableViews from 'react-swipeable-views';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function AboutUs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className="aboutUsContainer" id="aboutSection">
      <div className={classes.root}>
      <div className="aboutUsTitle">Dostarczamy usłóg w wielu obszarach </div>

      <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab className="tabIcon" label="Projektowanie" icon={<SVG src={require('./../../assets/imgs/icon5.svg')} height={23} width={23} className="svgIcon" />} {...a11yProps(0)} />
            <Tab className="tabIcon" label="Budownictwo" icon={<ApartmentIcon />} {...a11yProps(1)} />
            <Tab className="tabIcon" label="Szkolenia" icon={<SchoolIcon />} {...a11yProps(2)} />
            <Tab className="tabIcon" label="Doświadczenie" icon={<TimelapseIcon />} {...a11yProps(2)} />
            <Tab className="tabIcon" label="Niezawodność" icon={<VerifiedUserIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="designDescription">
              {/* <div>Tworzymy projekty domów typowych i indywidualnych</div>
              <div>Projektujemy instalacje wodne, kanalizacyjne, gazowe, centralnego ogrzewania, również z doborem niekonwencjonalnych źródeł energii – pompy ciepła, kolektory</div>
              <div>Projektujemy instalacje klimatyzacji i wentylacji</div>
              <div>Zajmujemy się kontrolą okresowych obiektów budowlanych w zakresie instalacji sanitarnych</div>
              <div>Obsługujemy inwestycjie w zakresie instalacji wodnych, kanalizacyjnych, gazowych, centralnego ogrzewania</div>
              <div>Sporządzamy świadectwa charakterystyki energetycznej budynków i lokali</div> */}

              <div style={{ fontSize: 22, color: 'orange'}}>Zajmujemy się:</div>
              <ul>
                <li>Tworzymy projekty domów typowych i indywidualnych</li>
                <li>Projektujemy instalacje wodne, kanalizacyjne, gazowe, 
                  <br/>
                    centralnego ogrzewania, również z doborem niekonwencjonalnych
                  <br /> 
                    źródeł energii – pompy ciepła, kolektory słoneczne
                    </li>
                <li>Projektujemy instalacje klimatyzacji i wentylacji</li>
                <li>Zajmujemy się kontrolą okresowych obiektów budowlanych 
                  <br />
                  w zakresie instalacji sanitarnych
                </li>
                <li>Obsługujemy inwestycjie w zakresie instalacji wodnych, 
                  <br />
                    kanalizacyjnych, gazowych, centralnego ogrzewania
                  </li>
                <li>Sporządzamy świadectwa charakterystyki energetycznej budynków i lokali</li>
              </ul>

            </div>
            <img className="house" style={{ position: 'absolute', right: 0, top: 100, zIndex: 100 }} src={require("./../../assets/imgs/house12.png")}  width={400} />
            <div className="oval"></div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="designDescription">
              <div style={{ fontSize: 22, color: 'orange'}}>Pomożemy w temacie:</div>
              <ul>
                    <li>Odnawialne źródła energii (OZE)</li>
                    <li>Instalacji urządzeń grzewczych z systemami zaopatrzenia paliwa 
                    </li>
                    <li>Instalacji grzewczych</li>
                    <li>Instalacji klimatyzacyjnych, chłodniczych
                    </li>
                    <li>Instalacji wody bytowej oraz kanalizacji wewnętrznej 
                      </li>
                    <li>Wentylacji mechanicznej z rekuperacją</li>
                    <li>Nadzoru inwestorskiego</li>
                  </ul>
                  </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="designDescription">
                <div style={{ fontSize: 22, color: 'orange'}}>Prowadzimy szkolenia z tematyki z wielu obszarów wiedzy</div>
                <ul>
                      <li>Bardzo dużo przeprowadzonych szkoleń</li>
                      <li>Szkolenia online oraz stacjonarne</li>
                      <li>Masa zadowolonych klientów</li>
                      <li>Specjalistyczna wiedza, napisane książki, doradztwo</li>
                      <li>Przygotowanie odpowiedniego szkolenia na zamówienie</li>
                      <li>Projektujemy, wprowadzamy do projektowania w CAD'zie oraz innych oprogramowaniach</li>
                    </ul>
                    </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="designDescription">
                  <div style={{ fontSize: 22, color: 'orange'}}>Na rynku działamy już od ponad 10 lat</div>
                  <ul>
                        <li>Doradzamy</li>
                        <li>Realizujemy</li>
                        <li>Zarabiamy</li>
                        <li>Cieszymy się</li>
                      </ul>
                      </div>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
          <div className="designDescription">
                  <div style={{ fontSize: 22, color: 'orange'}}>Jesteśmy niezawodni w tym co robimy</div>
                  <ul>
                        <li>Doradzamy</li>
                        <li>Realizujemy</li>
                        <li>Zarabiamy</li>
                        <li>Cieszymy się</li>
                      </ul>
                      </div>

          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default AboutUs;
