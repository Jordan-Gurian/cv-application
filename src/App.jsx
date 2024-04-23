import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo.jsx';
import EducationInfo from './components/EducationInfo.jsx';
import WorkInfo from './components/WorkInfo.jsx';
import EducationCard from './components/EducationCard.jsx'
import './styles/style.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [educationItems, setEducationItems] = useState([]);

  function addEducation(education) {
    setEducationItems([...educationItems, { ...education, id: uuidv4() }])
  }


  function deleteEntry(id, e) {
    e.preventDefault();
    setItems(items.filter((item) => item.id != id));  
  }


  return (
    <>
      <div>
      <PersonalInfo/>
      <h2>Education</h2>
      <EducationInfo addEducation={addEducation}/>
      <div className='education-items'>
        <h2>Education</h2>
          {educationItems.map(item => {
            return(
            <EducationCard id={item.id} education={item} deleteEntry={deleteEntry}/>
          )})}
      </div>      
      <WorkInfo/>
    </div>
    </>
  )
}

export default App
