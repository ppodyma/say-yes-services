import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RoomIcon from '@material-ui/icons/Room';
import './Style.scss'

function Contact() {
  return (
    <div className="contactContainer">
      

      <div className="contactContent">
          <h1>Pozostańmy w kontakcie</h1>
          <div className="contactIcon">
            <EmailIcon /> 
            <div>sayyesservices@gmail.com</div>
          </div>
          <div className="contactIcon">
            <PhoneAndroidIcon /> 
            <div>+48 645398111</div>
          </div>
          <div className="contactIcon">
            <RoomIcon /> 
            <div>Wrocław</div>
          </div>
      </div>
      
      <div className="contactForm"> 
       
            <TextField
              id="outlined-textarea"
              className="inputText"
              label="Imie i nazwisko"
              placeholder="Imie i nazwisko"
              multiline
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              className="inputText"
              label="Adres e-mail"
              placeholder="Adres e-mail"
              multiline
              variant="outlined"
            />
            <TextField
              id="outlined-textarea"
              className="inputText"
              label="Numer telefonu"
              placeholder="Numer telefonu"
              multiline
              variant="outlined"
            />
         
            <TextField
              id="outlined-multiline-static"
              className="inputText"
              label="Wiadomość"
              placeholder="Wiadomość"
              multiline
              rows={10}
              variant="outlined"
            />
          <Button variant="outlined" className="contactButton">Wyślij formularz</Button>
      </div>

    </div>

  );
}

export default Contact;
