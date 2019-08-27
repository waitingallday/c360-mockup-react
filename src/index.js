import React from "react"
import ReactDOM from "react-dom"
import Axios from "axios"

import "./styles.css"

const API_ENDPOINT = "https://waitingallday.com/c-360/data.json"

class App extends React.Component {
  state = { fields: [], items: [] }

  render() {
    const { items, fields } = this.state;

    return (
      <div className="App">
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
        <table>
          <thead>
            <tr>
              {Object.values(fields).map(label => (
                <th key={label}>{label}</th>
              ))}
              <th className="util" />
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                {Object.keys(fields).map(key => (
                  <td key={`${i}-${key}`} className={"field--" + key}>{item[key]}</td>
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

  async componentDidMount() {
    try {
      let res = await Axios.get(API_ENDPOINT)
      const items = res.data.results
      const fields = res.data.fieldLabels
      this.setState({ items, fields })

    } catch (e) {
      console.log(`${e}`)
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
