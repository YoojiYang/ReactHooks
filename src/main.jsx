import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const estobiInfo = {
  name : "estobi",
  age : 1,
}

const EstobiContext = createContext(estobiInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <EstobiContext.Provider value={estobiInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </EstobiContext.Provider>
)

export default EstobiContext