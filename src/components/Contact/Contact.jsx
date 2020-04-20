import React from 'react';
import './Style.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contact() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className="contactContainer">
      <div className="contactContent"> 
        {/* <div style={{ width: '300px'}}>
          <TextField
            id="standard-textarea"
            className="inputText"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="standard-textarea"
            className="inputText"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <TextField
            id="standard-textarea"
            className="inputText"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
        </div> */}
        <div style={{ width: '400px', height: '400px', margin: 20}}>
          <div>
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
            <Button variant="outlined" className="contactButton">Wyślij formularz</Button>
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              className="inputText"
              label="Wiadomość"
              placeholder="Wiadomość"
              multiline
              rows={10}
              // defaultValue="Default Value"
              variant="outlined"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
