import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ted Magurgen',
        email: 'theHurge@gmail.com',
        phone: '111-222-2222',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Chas. E. Cheese',
        email: 'ccheese@gmail.com',
        phone: '111-222-3344',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Dr. Evil',
        email: 'drevil@gmail.com',
        phone: '666-222-3344',
        type: 'professional',
      },
    ],
  };
  // state allows us to access anything in our state
  // dispatch allows us to dispatch objects to the reducer
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  // will wrap our entire application with this context (see App.js)
  return (
    // `state` comes from `useReducer`
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
