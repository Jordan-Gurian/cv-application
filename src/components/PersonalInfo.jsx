import { useState } from 'react';

export default function PersonalInfo() {
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
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    setPersonal({ 
                        name: personal.name,
                        email: personal.email,
                        phone: personal.phone,
                    });
                }}>
                <label>Name
                <input
                    type='text'
                    onChange={e => {
                        handleNameChange(e)
                    }}
                /></label>
                <label>Email  
                <input
                    type='email'
                    onChange={e => {
                        handleEmailChange(e)
                    }}
                /></label> 
                <label>Phone 
                <input
                    type='tel'
                    onChange={e => {
                        handlePhoneChange(e)
                    }}
                /></label>
                <button 
                    type='submit'
                >
                    Submit
                </button>    
            </form>
                              
            <div>
                {personal.name}
            </div>
            <div>
                {personal.email}
            </div>
            <div>
                {personal.phone}
            </div>
                    
        </>
    )

}