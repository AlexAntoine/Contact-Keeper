import React, {useContext, useEffect, useState} from 'react'
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Register = () => {    

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {register, error, clearError} = authContext;

    useEffect(()=>{

        if(error === 'User Already Exist'){
            setAlert(error, 'danger');
        }

        clearError();

    }, [error]);

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

        if(name === ''|| email ==='' || password === ''){

            setAlert('Please enter all fields.', 'danger');

        }else if(password !== password2){

            setAlert('Passwords do not match', 'danger')
        }
        else{
            register({
                name,
                email,
                password
            });
        }


    }

  return (
    <div className='form-container'>
        <h1>
            Account <span className='text-primart'>Register</span>
        </h1>

        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type="text" required name='name' value={name} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type="email" required name='email' value={email} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='password'>password</label>
                <input type="password" required minLength='6' name='password' value={password} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>
                <input type="password" name='password2' minLength='6' value={password2} onChange={onChange}></input>
            </div>

            <input type='submit' value="register" className='btn btn-primary btn-block'></input>
        </form>

    </div>
  )
}

export default Register;
