import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/Products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>This is the Header</span>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
