import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { ContactItems } from './ContactItems';

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const {contacts, filtered} = contactContext;

    if(contacts.length === 0){
        return (<h4>Please add a contact</h4>)
    }

    return(

        <Fragment>

            <TransitionGroup>
            {filtered !== null 
            ? filtered.map(contact => (
                
            <CSSTransition timeout={500} classNames="item" key={contact.id}> 
            <ContactItems  contact={contact}/> 
            </CSSTransition>))
            
            : contacts.map(contact =>( 

            <CSSTransition timeout={500} classNames="item" key={contact.id}> 
                <ContactItems  contact={contact}/> 
                </CSSTransition>))}
            </TransitionGroup>

        </Fragment>                                                                                                    
    )
}

export default Contacts