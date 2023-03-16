import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from "./types"

const ContactState = props =>{

    const initialState = {
        contacts:[
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
                name:'Johnny Sinns',
                email:'sinns@gmail.com',
                phone:'111-111-111',
                type:'Personsal'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Actions

    //Add Contact
    const addContact = (contact)=>{
        contact.id = uuidv4();

        dispatch({type: ADD_CONTACT, payload:contact});

    }

    //Delete Contact

    //Set Current Contact

    //Clear Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider value={{
            contacts:state.contacts,
            addContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;