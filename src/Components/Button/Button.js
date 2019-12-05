import React from 'react';
import PropTypes from 'prop-types'
import s from './Button.module.css'

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.button}>Load More</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default Button;
