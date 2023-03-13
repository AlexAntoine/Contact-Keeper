import React, {useReducer} from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = props =>{

    const initialState = {
        contact:[
            {
                id:1,
                name:'Alex Antoine',
                email:'a@gmail.com',
                phone:'111-111-111',
                type:'Personsal'
            },

            {
                id:2,
                name:'Matt White',
                email:'mwhite@gmail.com',
                phone:'111-111-111',
                type:'Personsal'
            },

            {
                id:3,
                name:'John Sinns',
                email:'sinns@gmail.com',
                phone:'111-111-111',
                type:'Personsal'
            }
        ]
    };

    cosnt [state, dispatch] = useReducer(contactReducer, initialState);

    //Actions

    //Add Contact

    //Delete Contact

    //Set Current Contact

    //Clear Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <contactContext.Provider value={{
            contacts:state.contacts
        }}>
            {props.childre}
        </contactContext.Provider>
    )

}

export default ContactState;