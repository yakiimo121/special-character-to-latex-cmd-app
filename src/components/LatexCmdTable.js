import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import latexCmdJson from '../latex-cmd.json';


function createData(key, value){
  return { key, value };
};

let rows = [];

Object.keys(latexCmdJson).forEach(function (key) {
  rows.push(createData(key, latexCmdJson[key]));
});


function LatexCmdTable() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table"s>
          <TableHead>
            <TableRow>
              <TableCell>Special characters</TableCell>
              <TableCell>LaTeX commands</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell>{row.key}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default LatexCmdTable;