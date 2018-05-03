import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductList from './components/ProductList';


class App extends Component {

  state = {
    products: [
      {id: 1, name: 'AirMax 90', brand: 'Nike'},
      {id: 2, name: 'Yeezy', brand: 'Adidas'},
      {id: 3, name: 'Classic', brand: 'Reebok'},
    ]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        <ProductList products={this.state.products}/>
        </div>
      </div>
    );
  }
}

export default App;
