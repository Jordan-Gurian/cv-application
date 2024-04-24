import { useState } from 'react';
import '../styles/style.css'

export default function WorkInfo({ addWork }) {
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
            <form className='work inputs'
                onSubmit={(e) => {
                    e.preventDefault();
                    addWork(work)
                    setWork({ 
                        company: work.company,
                        position: work.position,
                        tasks: work.tasks,
                        startDate: work.startDate,
                        endDate: work.endDate,
                    });
                }}>
                <label>Company</label>
                <input
                    type='text'
                    onChange={e => {
                        handleCompanyChange(e)
                    }}
                />
                <label>Position</label>
                <input
                    type='text'
                    onChange={e => {
                        handlePositionChange(e)
                    }}
                />
                <label>Tasks</label>
                <input
                    type='text'
                    onChange={e => {
                        handleTasksChange(e)
                    }}
                />
                <label>Start Date</label>
                <input
                    type='date'
                    onChange={e => {
                        handleStartDateChange(e)
                    }}
                />
                <label>End Date</label>
                <input
                    type='date'
                    onChange={e => {
                        handleEndDateChange(e)
                    }}
                />
                <button 
                    type='submit'
                >
                    Submit
                </button>    
            </form>
        </>
    )

}