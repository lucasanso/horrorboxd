import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Settings from './components/Settings'
import App from './App'
import Default from './components/Default'
import Catalogue from './components/Catalogue'
import Rate from './components/Rate'
import Account from './components/Account'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/ajustes' element={<Settings/>}/>
          <Route path='*' element={<Default/>}/>
          <Route path='/catalogo' element={<Catalogue/>}/>
          <Route path='/avaliar' element={<Rate/>}/>
          <Route path='/conta' element={<Account/>}/>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
