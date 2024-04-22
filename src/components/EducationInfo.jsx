import { useState } from 'react';

export default function EducationInfo() {
    const [education, setEducation] = useState({ college: null, degree: null, gradDate: null })

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
                              
            <div>
                {education.college}
            </div>
            <div>
                {education.degree}
            </div>
            <div>
                {education.gradDate}
            </div>
                    
        </>
    )

}