import { useState } from 'react';

export default function PersonalInfo() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('fake@gmail.com');
    const [phone, setPhone] = useState('555-555-5555');

    let tempName;
    let tempEmail;
    let tempPhone;

    function handleNameChange(e) {
        tempName = e.target.value;
    }

    function handleEmailChange(e) {
        tempEmail = e.target.value;
    }

    function handlePhoneChange(e) {
        tempPhone = e.target.value;
    }

    return(
        <>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    setName(tempName);
                    setEmail(tempEmail);
                    setPhone(tempPhone);
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
                {name}
            </div>
            <div>
                {email}
            </div>
            <div>
                {phone}
            </div>
                    
        </>
    )

}