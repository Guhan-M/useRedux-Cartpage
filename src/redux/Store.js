import { configureStore } from '@reduxjs/toolkit'
import shopingcartReducer from './Shoping.jsx'
export default configureStore({
  reducer: {
    shop:shopingcartReducer
  }
})