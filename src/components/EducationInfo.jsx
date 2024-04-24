import { useState } from 'react';
import '../styles/style.css'

export default function EducationInfo({ addEducation }) {
    const [education, setEducation] = useState({ college: null, degree: null, gradDate: null });
    
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
            <form className='education inputs'
                onSubmit={(e) => {
                    e.preventDefault();
                    addEducation(education)
                    setEducation({ 
                        college: education.college,
                        degree: education.degree,
                        gradDate: education.gradDate,
                    });
                }}>
                <label>College</label>
                <input
                    type='text'
                    onChange={e => {
                        handleCollegeChange(e)
                    }}
                />
                <label>Degree</label>
                <input
                    type='text'
                    onChange={e => {
                        handleDegreeChange(e)
                    }}
                />
                <label>Graduation Date</label>
                <input
                    type='date'
                    onChange={e => {
                        handleGradDateChange(e)
                    }}
                />
                <button
                    className='submit'  
                    type='submit'
                >
                    Submit
                </button>    
            </form>
        </>
    )
}