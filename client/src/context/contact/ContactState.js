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
} from "../types"

const ContactState = props =>{

    const initialState = {
        contacts:[
            {
                id:1,
                name:'Alex Antoine',
                email:'a@gmail.com',
                phone:'111-111-1111',
                type:'Personsal'
            },

            {
                id:2,
                name:'Matt White',
                email:'mwhite@gmail.com',
                phone:'111-111-1111',
                type:'Personsal'
            },

            {
                id:3,
                name:'Johnny Sinns',
                email:'sinns@gmail.com',
                phone:'111-111-1111',
                type:'Personsal'
            }
        ],
        current:null,
        filtered:null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Actions

    //Add Contact
    const addContact = (contact)=>{
        contact.id = uuidv4();

        dispatch({type: ADD_CONTACT, payload:contact});
    }

    //Delete Contact
    const deleteContact = (id)=>{
        dispatch({type: DELETE_CONTACT, payload:id});
    }

    //Set Current Contact
    const setCurrent = (contact)=>{
        dispatch({type: SET_CURRENT, payload:contact});
    }

    //Clear Current Contact
    const clearCurrent = ()=>{
        dispatch({type: CLEAR_CURRENT});
    }

    //Update Contact
    const updateContact = (contact)=>{
        dispatch({type: UPDATE_CONTACT, payload:contact});
    }

    //Filter Contacts
    const filterContact = (text)=>{
        dispatch({type: FILTER_CONTACT, payload:text});
    }

    //Clear Filter
    const clearFilter = ()=>{
        dispatch({type:CLEAR_FILTER, payload:null});
    }


    return (
        <ContactContext.Provider value={{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            filterContact,
            clearFilter,
            addContact,
            setCurrent,
            clearCurrent,
            deleteContact,
            updateContact
            
        }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;