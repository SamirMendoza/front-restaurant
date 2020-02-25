import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import TablesList from './components/TablesList';
import ReservationsList from './components/ReservationsList'

function Element(props) {
  return (
    <div className="element">
      <div>{props.name}</div>
      {props.children}
    </div>
  )
}

class App extends Component{

  constructor(){
    super();
    this.state={
      updateValue:false
    }
    this.updateCountValue=this.updateCountValue.bind(this);
  }

  updateCountValue(value){
    this.setState({
      updateValue:value
    });
  }

  render(){
    return (
     <div>
       <Header/>
       <div className="App-content">
          <Element name="Mesas">
            <TablesList/>
          </Element>
          <Element name="Reservas">
            <ReservationsList updateCountContainer={this.updateCountValue} shouldUpdate={this.state.updateValue}/>
          </Element>
        </div>
      </div>  
    );
  }
}

export default App;
