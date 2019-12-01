import React, { Component } from 'react'
import s from './SearchBar.module.css'

export default class SearchBar extends Component {
  state = {
    query: '',
  }
  handleChange = e => {
    this.setState({ query: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state
    this.props.onSearch(query);
    this.setState({ query: '' })
  }
  render() {
    const { query } = this.state
    return (
      <>
        <header className={s.search__bar}>
          <form onSubmit={this.handleSubmit} className={s.search__form}>
            <button type="submit" className={s.search__form__button}>
              <span className={s.search__form__button__label}>Search</span>
            </button>

            <input
              className={s.search__form__input}
              value={query}
              onChange={this.handleChange}
              type="text"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    )
  }
}
