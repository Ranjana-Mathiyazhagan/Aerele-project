import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loginpage } from './Components/Login';
import { Dashboard } from './Components/Dashboard';
import { Warehouse } from './Components/Warehouse';
import { Product } from './Components/Product';
import { Branches } from './Components/Branch';
import { Update } from './Components/Update';
import { Dispatch } from './Components/Dispatch';
import { Addproduct } from './Components/Addproduct';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Loginpage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/warehousedetails' element={<Warehouse/>}/>
      <Route path='/productdetails' element={<Product/>}/>
      <Route path='/dispatch/:product_id' element={<Dispatch/>}/>
      <Route path='/productdetails/:product_id' element={<Product/>}/>
      <Route path='/update/:product_id' element={<Update/>}/>
      <Route path='/branches/:location_id' element={<Branches/>}/>
      {/* <Route path='/branch1/:location_id' element={<peelamedu/>}/> */}

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
