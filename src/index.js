import React, { Component } from "react"
import ReactDOM from "react-dom"
import Axios from "axios"

import DataTable from "./DataTable"
import SearchForm from "./SearchForm"
import LOCALDATA from "../sample/data.json"

import "./styles.css"

const API_ENDPOINT = "https://s3.amazonaws.com/waitingallday.com/c-360/data.json"

class App extends Component {
  state = { items: [] }

  render() {
    const { items } = this.state;

    return (
      <div className="App">
        <SearchForm></SearchForm>
        <DataTable items={items}></DataTable>
      </div>
    );
  }

  async componentDidMount() {
    if (API_ENDPOINT) {
      try {
        let res = await Axios.get(API_ENDPOINT)
        const items = res.data.results
        this.setState({ items })

      } catch (e) {
        console.log(`${e}`)
      }
    } else {
      const items = LOCALDATA.results
      this.setState({ items })  
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
