import React, {useState} from 'react'

const Login = () => {

    const [user, setUser] = useState({
        password:'',
        email:'',
       
    });

    const { email, password, } = user;

    const onChange =(e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit =(e) =>{
        e.preventDefault();

        console.log('Login Submit');

    }

  return (
    <div className='form-container'>
        <h1>
            Account <span className='text-primary'>Login</span>
        </h1>

        <form onSubmit={onSubmit}>
            
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' value={email} onChange={onChange}></input>
            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' value={password} onChange={onChange}></input>
            </div>

           

            <input type='submit' value="login" className='btn btn-primary btn-block'></input>
        </form>

    </div>
  )
}

export default Login;
