import PropTypes from 'prop-types';
import css from './Container.module.css';

const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
