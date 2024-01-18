import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Wheather from './data.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Wheather />
  </React.StrictMode>,
)
