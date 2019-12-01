import React from 'react';
import PropTypes from 'prop-types'
import s from './Button.module.css'

const Button = ({ onClick }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button onClick={onClick} className={s.button}>Load More</button>
  );
};


export default Button;
