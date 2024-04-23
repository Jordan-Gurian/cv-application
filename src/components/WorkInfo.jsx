import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/style.css'

export default function WorkInfo() {
    const [items, setItems] = useState([]);
    const [work, setWork] = useState({ company: null, position: null, tasks: null, startDate: null, endDate: null })

    function handleItemsChange(e) {
        setItems([...items, { ...work, id: uuidv4() }])
    }

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

    function deleteEntry(id, e) {
        e.preventDefault();
        setItems(items.filter((item) => item.id != id));  
    }

    return(
        <>
            <form className='work inputs'
                onSubmit={(e) => {
                    e.preventDefault();
                    setWork({ 
                        company: work.company,
                        position: work.position,
                        tasks: work.tasks,
                        startDate: work.startDate,
                        endDate: work.endDate,
                    });
                    handleItemsChange(e);
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

            {items.map(item => {
                return (
                <div key={item.id} class='item'>
                    <div>
                        {item.company}
                    </div>
                    <div>
                        {item.position}
                    </div>
                    <div>
                        {item.tasks}
                    </div>
                    <div>
                        {item.startDate}
                    </div>
                    <div>
                        {item.endDate}
                    </div>
                    <button
                        onClick={e => {
                            deleteEntry(item.id, e);
                            }}>
                    Delete
                    </button>
                </div>
            )})}
        </>
    )

}