import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'

import "./styles/input.css";
import "./styles/output.css";


import { App } from './components/App';
import { Header } from './components/Header';
import { Wpp } from './components/wpp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Header/>
      <App /> 
      < Wpp />
    </NextUIProvider>
  </React.StrictMode>,
)
