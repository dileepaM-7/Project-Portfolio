import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as router} from  'react-router-dom'
import { Router } from '@mui/icons-material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <App />
   </Router>
    
  </React.StrictMode>
);

