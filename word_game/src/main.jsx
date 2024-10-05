import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import store from "./management/store.jsx"
import App from './App.jsx'
import  "./index.css"
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css'; 
import 'primeflex/primeflex.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
