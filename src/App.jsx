import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo.jsx';
import EducationInfo from './components/EducationInfo.jsx';
import WorkInfo from './components/WorkInfo.jsx';
import PersonalCard from './components/PersonalCard.jsx'
import EducationCard from './components/EducationCard.jsx';
import WorkCard from './components/WorkCard.jsx';
import './styles/style.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [personal, setPersonal] = useState({ name: null, email: null, phone: null })
  const [educationItems, setEducationItems] = useState([]);
  const [workItems, setWorkItems] = useState([]);

  function addPersonal(personal) {
    setPersonal(personal)
  }

  function addEducation(education) {
    setEducationItems([...educationItems, { ...education, id: uuidv4() }])
  }

  function addWork(work) {
    setWorkItems([...workItems, { ...work, id: uuidv4() }])
  }

  function deleteEntry(items, setItems, id, e) {
    e.preventDefault();
    setItems(items.filter((item) => item.id != id));  
  }


  return (
    <div className='container'>
      <div className='left-side'>
        <h2>Personal Information</h2>
        <PersonalInfo addPersonal={addPersonal}/>
        <h2>Education</h2>
        <EducationInfo addEducation={addEducation}/>
        <h2>Work Experience</h2>   
        <WorkInfo addWork={addWork}/>
      </div>

      <div className='right-side'>
        <div className='items'>
          <h2>Personal Information</h2>
          <PersonalCard personal={personal}/>
        </div>
        <div className='items'>
          <h2>Education</h2>
            {educationItems.map(item => {
              return(
              <div className='item'>
                <EducationCard education={item}/>
                <button
                className='delete'
                onClick={e => {
                    deleteEntry(educationItems, setEducationItems, item.id, e);
                    }}>
                Delete
                </button>
              </div>
            )})}
        </div>
        <div className='items'>
          <h2>Work Experience</h2>
            {workItems.map(item => {
              return(
              <div className='item'>
                <WorkCard work={item}/>
                <button
                className='delete'
                onClick={e => {
                    deleteEntry(workItems, setWorkItems, item.id, e);
                    }}>
                Delete
                </button>
              </div>
            )})}
        </div>
      </div>  
    </div>
  )
}

export default App
