import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

class ContactForm extends Component {
  // PropTypes, як статична властивість
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Стейт форми
  state = {
    name: '',
    number: '',
  };

  // Метод слідкує за інпутами та записує у стейт їх значення
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // Метод відправки форми. Формує із стейта контакт та передає у зовнішній метод
  hanldeSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    // Зовнішній метод у пропсах класа
    this.props.onSubmit(contact);

    this.resetForm();
  };

  // Зброс полів форми (після відправки)
  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.hanldeSubmit}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            className={css.input}
            value={this.state.name} // Записуємо значення у  стейт
            onChange={this.hanldeChange} // Слідкуючий метод
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            className={css.input}
            value={this.state.number} // Записуємо значення у  стейт
            onChange={this.hanldeChange} // Слідкуючий метод
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <div className={css.button__wrapper}>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
