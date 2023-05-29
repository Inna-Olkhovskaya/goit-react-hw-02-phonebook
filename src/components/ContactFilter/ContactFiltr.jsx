import PropTypes from 'prop-types';

import css from './ContactFilter.module.css';

// Принимает значение с поля фильтра и метод пишущий в стейт
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={css.input}
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
