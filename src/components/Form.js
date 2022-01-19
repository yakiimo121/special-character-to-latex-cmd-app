import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Form.css';
import latexCmdJson from '../latex-cmd.json';


function Form() {
  const [inText, setInText] = useState("");
  const [outText, setOutText] = useState("");
  let tmpText = "";

  const handleChange = (event) => {
    setInText(event.target.value);
    tmpText = event.target.value;
    Object.keys(latexCmdJson).forEach(function (key) {
      tmpText = tmpText.replace(RegExp(key, 'g'), latexCmdJson[key]);
    });
    setOutText(tmpText);
  }

  return (
    <div>
      <div>
        {/* <textarea className="textarea-large" type="text" name="input text" value={inText} onChange={handleChange}></textarea> */}
        <TextField 
          multiline 
          focused 
          className="textfield-large" 
          label="LaTeX (including special characters)"
          name="input text"
          value={inText} 
          variant="filled"
          rows={6}
          margin="normal"
          onChange={handleChange}/>
      </div>
      <div>
        {/* <textarea readOnly className="textarea-large" type="text" name="output text" value={outText}></textarea> */}
        <TextField 
          multiline 
          focused 
          className="textfield-large" 
          label="LaTeX (using escaped codes)"
          name="output text" 
          value={outText} 
          variant="filled"
          rows={6}
          margin="normal"
          onChange={handleChange}
          InputProps={{
            readOnly: true,
          }}/>
      </div>
      
    </div>
  );
}

export default Form;