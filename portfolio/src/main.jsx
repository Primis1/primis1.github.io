import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './header.jsx'
import {Data} from './date.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Data />
  </React.StrictMode>,
)
