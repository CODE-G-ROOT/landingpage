import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'

import "./input.css";
import App from "./components/Button.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
      <h1 className='text-3xl font-bold underline'>HOLAA</h1>
    </NextUIProvider>
  </React.StrictMode>,
)
