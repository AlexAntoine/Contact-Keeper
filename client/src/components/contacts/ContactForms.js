import React, {useState} from 'react';

const ContactForm = ()=>{

    const [contact, setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });

    const {name, email, phone, type} = contact;

    const onChange = (e)=>{
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form>
            <h2 className='text-primary'>Add Contact</h2>
            <input type="text" placeholder="name" name="name" value={name} onChange={onChange}></input>
            <input type="text" placeholder="email" name="email" value={email} onChange={onChange}></input>
            <input type="text" placeholder="phone" name="phone" value={phone} onChange={onChange}></input>
            <input type="text" placeholder="type" name="type" value={type} onChange={onChange}></input>

            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type === 'personal'}>Personal {' '} </input>
            <input type="radio" name="type" value="professional" checked={type === 'professional'}>Professional {' '} </input>
            <div>
                <input type='submit' className='btn btn-primary btn-block' value="Add Contact"></input>
            </div>
        </form>
    )
}

export default ContactForm;