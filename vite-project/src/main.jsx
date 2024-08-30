import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import New from './New.jsx';


createRoot(document.getElementById('root')).render(
 
    <>
    <App />
    <h2>hello from inside render</h2>
    <New/>
    </>
  
)
