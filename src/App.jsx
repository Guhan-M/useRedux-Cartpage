import React from 'react'
import ShopPage from './components/ShopPage'
import CartPage from './components/CartPage.jsx'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store  from './redux/Store.js';
function App() {
  return <>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShopPage/>}/>
      <Route path="/cartpage" element={<CartPage/>}/>
      <Route  path="*" element={<Navigate to={"/"}/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
  </>
}

export default App