import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function EducationInfo() {
    const [items, setItems] = useState([]);
    const [education, setEducation] = useState({ college: null, degree: null, gradDate: null })



    function handleItemsChange(e) {
        setItems([...items, { ...education, id: uuidv4() }])
    }



    function handleCollegeChange(e) {
        education.college = e.target.value;
    }

    function handleDegreeChange(e) {
        education.degree = e.target.value;
    }

    function handleGradDateChange(e) {
        education.gradDate = e.target.value;
    }

    return(
        <>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    setEducation({ 
                        college: education.college,
                        degree: education.degree,
                        gradDate: education.gradDate,
                    });
                    handleItemsChange(e);
                }}>
                <label>College
                <input
                    type='text'
                    onChange={e => {
                        handleCollegeChange(e)
                    }}
                /></label>
                <label>Degree  
                <input
                    type='text'
                    onChange={e => {
                        handleDegreeChange(e)
                    }}
                /></label> 
                <label>Graduation Date 
                <input
                    type='date'
                    onChange={e => {
                        handleGradDateChange(e)
                    }}
                /></label>
                <button 
                    type='submit'
                >
                    Submit
                </button>    
            </form>

            {items.map(item => {
                return (
                <>
                <div>
                    {item.college}
                </div>
                <div>
                    {item.degree}
                </div>
                <div>
                    {item.gradDate}
                </div>
                </>
            )})}                 

                    
        </>
    )

}