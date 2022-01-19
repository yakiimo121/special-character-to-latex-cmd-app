import React from 'react';
import './App.css';
import Form from './Form';
import LatexCmdTable from './LatexCmdTable';

function App() {
  return (
    <div>
      <Form />
      <hr size="1" wifth="100%" color="gray"></hr>
      <LatexCmdTable />
      {/* <h2>参考</h2>
      <ul>
        <li><a href="http://www.bibtex.org/SpecialSymbols/">BibTeX Special Symbols</a></li>
        <li><a href="https://cosmoshouse.com/tools/acc-conv-j.htm">アクセント付き文字の変換表 0.11（アクセント変換表）</a></li>
      </ul> */}
    </div>
  );
}

export default App;
