import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactFilter/ContactFiltr';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
     <div>
  <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  <Filter />
  <ContactList />
</div>
    )
  }
}

export default App;
