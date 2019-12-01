import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './Modal.module.css'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }
  handleKeyPress = e => {
    if (e.keyCode !== 27) {
      return;
    }
    this.props.onClose();
  }
  handleBackdrop = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.props.onClose();
  }
  render() {
    const { image } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleBackdrop}>
        <div className={s.modal}>
          <img src={image} alt="pic" />
        </div>
      </div>
    )
  }
}
Modal.propTypes = {
  image: PropTypes.string.isRequired,
}

