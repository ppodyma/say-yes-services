
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
    <div className="contactContainer" id="aboutSection">
      <div className={classes.root}>

      <AppBar position="static" color="default">
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Projektowanie" icon={<SVG src={require('./../../assets/imgs/icon5.svg')} height={23} width={23} className="svgIcon" />} {...a11yProps(0)} />
            <Tab label="Budownictwo" icon={<ApartmentIcon />} {...a11yProps(1)} />
            <Tab label="Szkolenia" icon={<SchoolIcon />} {...a11yProps(2)} />
            <Tab label="Doświadczenie" icon={<TimelapseIcon />} {...a11yProps(2)} />
            <Tab label="Niezawodność" icon={<VerifiedUserIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
            DELECTON
            TREE
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default AboutUs;
