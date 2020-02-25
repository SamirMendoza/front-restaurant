import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import '../styles/components.css';

class TablesList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      componentfetch: true,
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/restaurant')
      .then(response => response.json())
      .then(jsonData => this.setState({ tables: jsonData, componentfetch: false }))
  }

  render() {
    if (this.state.componentfetch) {
      return <h1>Cargando...</h1>
    }

    function contionalReservation (showButton){
      if (showButton) {
        return <Button variant="contained" color="primary">Reservar</Button>
      }
      return <p></p>
    }

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className="TablesTable" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>MESA</b></TableCell>
                <TableCell align="right"><b>DISPONIBILIDAD</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.tables.map(table => (
                <TableRow hover role="checkbox" key={table.id} tabIndex={-1} >
                  <TableCell component="th" scope="row">
                    Mesa {table.id} 
                  </TableCell>
                  <TableCell align="right">{contionalReservation(table.availability)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div id="footer">Total mesas: {Object.keys(this.state.tables).length}</div>
      </div>
    )
  }
}
export default TablesList;