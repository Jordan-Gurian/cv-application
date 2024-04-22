import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PersonalInfo from './components/PersonalInfo.jsx';
import EducationInfo from './components/EducationInfo.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalInfo/>
    <EducationInfo/>
    <App />
  </React.StrictMode>,
)
