import React, { Component } from "react"

class SearchForm extends Component {
  render() {
    return (
      <form>
        <label className="search__label">Search type:</label>
        <select className="search__type">
          <option>Name</option>
          <option>Email</option>
        </select>
        <input
          className="search__keyword"
          placeholder="Start typing"
          type="text"
          name="search"
        />
        <input className="search__button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
