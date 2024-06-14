import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer/>
  </Provider>
)
