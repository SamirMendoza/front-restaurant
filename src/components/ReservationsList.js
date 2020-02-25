import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import { deleteReservatione } from '../actions/actionOfReservation';


class ReservationsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      componentfetch: true,
      refrest: false
    }
    this.updateCountValue=this.updateCountValue.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/restaurant/reservations')
      .then(response => response.json())
      .then(jsonData => this.setState({ reservations: jsonData, componentfetch: false}))
  }

  updateCountValue(){
    this.setState.refresh(this.state.refresh ? false : true)
  }

  deleteReservation = e =>{
    this.updateCountValue();
    this.props.refresh(true);
    deleteReservatione(e);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.shouldUpdate===true){
      this.props.updateCountContainer(false);
      this.updateCountValue();
    };
  }
  render() {
    if (this.state.componentfetch) {
      return <h1>Cargando...</h1>
    }

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className="ReservationsTable" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>RESERVA</b></TableCell>
                <TableCell align="right"><b>MESA</b></TableCell>
                <TableCell align="right"><b>PRECIO</b></TableCell>
                <TableCell align="right"><b>APELLIDO</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.reservations.map(reservation => (
                <TableRow hover role="checkbox" key={reservation.code} tabIndex={-1} >
                  <TableCell component="th" scope="row">
                    Reserva {reservation.code} 
                  </TableCell>
                  <TableCell align="right">{reservation.idTable} </TableCell>
                  <TableCell align="right">{reservation.price} </TableCell>
                  <TableCell align="right">{reservation.name} </TableCell>
                  <TableCell align="right"><Button variant="contained" color="primary" onClick={e => {this.deleteReservation(reservation)}}>Eliminar</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div id="footer">Total reservas: {Object.keys(this.state.reservations).length}</div>
      </div>
    )
  }
}
export default ReservationsList;