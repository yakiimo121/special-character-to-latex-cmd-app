import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Form.css';
import latexCmdJson from '../latex-cmd.json';


function Form() {
  const [outText, setOutText] = useState("");
  let tmpText = "";

  const handleChange = (event) => {
    tmpText = event.target.value;
    Object.keys(latexCmdJson).forEach(function (key) {
      tmpText = tmpText.replace(RegExp(key, 'g'), latexCmdJson[key]);
    });
    setOutText(tmpText);
  }

  return (
    <div>
      <div>
        <TextField 
          multiline 
          focused 
          className="textfield-large" 
          label="LaTeX (including special characters)"
          name="input field"
          variant="filled"
          rows={6}
          margin="normal"
          onChange={handleChange}/>
      </div>
      <div>
        <TextField 
          multiline 
          focused 
          className="textfield-large" 
          label="LaTeX (using escaped codes)"
          name="output field" 
          value={outText} 
          variant="filled"
          rows={6}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}/>
      </div>
      
    </div>
  );
}

export default Form;