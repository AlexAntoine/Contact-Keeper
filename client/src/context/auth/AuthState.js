import React, {useReducer} from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import AuthContext from './AuthContext';
import AuthReducer from "./AuthReducer";
import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,
   CLEAR_ERRORS
} from "../types"

const AuthState = props =>{

    const initialState = {
       token:localStorage.getItem('token'),
       isAuthenticated: null,
       loading:true,
       error:null,
       user:null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Actions

    //Load User
    const loadUser = async()=>{

        if(localStorage.token)
        {
            setAuthToken(localStorage.token)
        }

        try{
            const res = await axios.get('/api/v1/auth');
            console.log('AuthState line 41: ', res);
            dispatch({
                type:USER_LOADED,
                payload: res.data
            });

        }catch(err){
            console.log('AutState line 47: ', err);
            dispatch({
                type: AUTH_ERROR,
            })
        }
    }

    //Register User
    const register = async(formData)=>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            const res = await axios.post('api/v1/users', formData, config);
            console.log('authState line 61: ', res);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            loadUser();

        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }
    //Login User
    const login = ()=> console.log('login user');
    //Logout
    const logout = ()=> console.log('logout user');
    //Clear Errors
    const clearError = ()=> dispatch({type: CLEAR_ERRORS});

    return (
        <AuthContext.Provider value={{
           token: state.token,
           isAuthenticated: state.isAuthenticated,
           loading: state.loading,
           user: state.user,
           error: state.error,
           register,
           login,
           logout,
           clearError,
           loadUser
            
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;