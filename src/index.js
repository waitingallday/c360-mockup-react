import React from "react";
import ReactDOM from "react-dom";
// import axios from "axios";

import "./styles.css";
import data from "./data.json";

class App extends React.Component {
  state = { items: data.results };

  render() {
    const items = this.state.items;

    return (
      <div className="App">
        <form>
          <label class="search__label">Search type:</label>
          <select class="search__type">
            <option>Name</option>
            <option>Email</option>
          </select>
          <input
            class="search__keyword"
            placeholder="Start typing"
            type="text"
            name="search"
          />
          <input class="search__button" type="submit" value="Search" />
        </form>
        <table>
          <thead>
            <tr>
              {Object.values(data.fieldLabels).map(label => (
                <th>{label}</th>
              ))}
              <th className="util" />
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr>
                {Object.keys(data.fieldLabels).map(key => (
                  <td className={"field--" + key}>{item[key]}</td>
                ))}
                <td className="util">
                  <span className="accordion" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
