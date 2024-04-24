import { useState } from 'react';

export default function PersonalInfo({ addPersonal }) {
    const [personal, setPersonal] = useState({ name: null, email: null, phone: null })

    function handleNameChange(e) {
        personal.name = e.target.value;
    }

    function handleEmailChange(e) {
        personal.email = e.target.value;
    }

    function handlePhoneChange(e) {
        personal.phone = e.target.value;
    }

    return(
        <>
            <form className='personal inputs'
                onSubmit={(e) => {
                    e.preventDefault();
                    addPersonal(personal);
                    setPersonal({
                        name: personal.name,
                        email: personal.email,
                        phone: personal.phone,
                    });
                }}>
                <label>Name</label>
                <input
                    type='text'
                    onChange={e => {
                        handleNameChange(e)
                    }}
                />
                <label>Email</label>
                <input
                    type='email'
                    onChange={e => {
                        handleEmailChange(e)
                    }}
                /> 
                <label>Phone</label>
                <input
                    type='tel'
                    onChange={e => {
                        handlePhoneChange(e)
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