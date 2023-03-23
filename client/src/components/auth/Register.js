import React, {useState} from 'react'

const Register = () => {

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name, email, password, password2} = user;

    const onChange =(e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit =(e) =>{
        e.preventDefault();

        console.log('Register Submit');

    }

  return (
    <div className='form-container'>
        <h1>
            Account <span className='text-primart'>Register</span>
        </h1>

        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' value={name} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' value={email} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='password'>password</label>
                <input type="password" name='password' value={password} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>
                <input type="password" name='password2' value={password2} onChange={onChange}></input>
            </div>

            <input type='submit' value="register" className='btn btn-primary btn-block'></input>
        </form>

    </div>
  )
}

export default Register;
