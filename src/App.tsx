import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
//import { ProductList } from './components/Products'
import ProductsLister from './ProductsLister'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>This is the Header</span>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsLister />
      </Suspense>
      {/* React.StrictMode calls a provider child  and some other hooks
      related functions twice */}
      {/* <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsLister />
        </Suspense>
      </React.StrictMode>, */}
    </div>
  );
}

export default App;
