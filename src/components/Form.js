import React, { useState } from 'react';
import './Form.css';
import tableJson from './table.json';

function Form() {
  const [inText, setInText] = useState("");
  const [outText, setOutText] = useState("");
  let tmpText = "";

  const handleChange = (event) => {
    setInText(event.target.value);
    tmpText = event.target.value;
    Object.keys(tableJson).forEach(function (key) {
      tmpText = tmpText.replace(RegExp(key, 'g'), tableJson[key]);
    });
    setOutText(tmpText);
  }

  return (
    <div>
      <div>
        <h2>BibTeX (including special characters)</h2>
      </div>
      <div>
        <textarea className="textarea-large" type="text" name="input text" value={inText} onChange={handleChange}></textarea>
      </div>
      <div>
        <h2>BibTeX (perfect format)</h2>
      </div>
      <div>
        <textarea readOnly className="textarea-large" type="text" name="output text" value={outText}></textarea>
      </div>
      
    </div>
  );
}

export default Form;