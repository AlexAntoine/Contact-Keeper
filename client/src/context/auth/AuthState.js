import React, {useReducer} from 'react';
import axios from 'axios';
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
    const loadUser = ()=> console.log('load user');

    //Register User
    const register = async(formData)=>{
        const config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            const res = await axios.post('api/v1/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
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