
import React from 'react';
import './Style.scss'
import { makeStyles, useTheme } from '@material-ui/core/styles';


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function AboutUs() {
  const [value, setValue] = React.useState('Controlled');

  

  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <div className="contactContainer" id="aboutSection">
      
    </div>
  );
}

export default AboutUs;
