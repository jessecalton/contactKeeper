import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  // provides access to any state or actions associated with this context
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a Contacts</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              // The `key` has to go on the direct element inside of the `map`
              // so we moved it from ContactItem to CSSTransition
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
