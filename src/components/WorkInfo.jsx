import { useState } from 'react';

export default function WorkInfo() {
    const [work, setWork] = useState({ company: null, position: null, tasks: null, startDate: null, endDate: null })

    function handleCompanyChange(e) {
        work.company = e.target.value;
    }

    function handlePositionChange(e) {
        work.position = e.target.value;
    }

    function handleTasksChange(e) {
        work.tasks = e.target.value;
    }

    function handleStartDateChange(e) {
        work.startDate = e.target.value;
    }

    function handleEndDateChange(e) {
        work.endDate = e.target.value;
    }

    return(
        <>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    setWork({ 
                        company: work.company,
                        position: work.position,
                        tasks: work.tasks,
                        startDate: work.startDate,
                        endDate: work.endDate,
                    });
                }}>
                <label>Company
                <input
                    type='text'
                    onChange={e => {
                        handleCompanyChange(e)
                    }}
                /></label>
                <label>Position  
                <input
                    type='text'
                    onChange={e => {
                        handlePositionChange(e)
                    }}
                /></label> 
                <label>Tasks
                <input
                    type='text'
                    onChange={e => {
                        handleTasksChange(e)
                    }}
                /></label>
                <label>Start Date
                <input
                    type='date'
                    onChange={e => {
                        handleStartDateChange(e)
                    }}
                /></label>
                <label>End Date
                <input
                    type='date'
                    onChange={e => {
                        handleEndDateChange(e)
                    }}
                /></label>
                <button 
                    type='submit'
                >
                    Submit
                </button>    
            </form>
                              
            <div>
                {work.company}
            </div>
            <div>
                {work.position}
            </div>
            <div>
                {work.tasks}
            </div>
            <div>
                {work.startDate}
            </div>
            <div>
                {work.endDate}
            </div>
                    
        </>
    )

}