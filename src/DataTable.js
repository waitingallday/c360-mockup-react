import React, { Component } from "react"

import LOCALDATA from "../sample/data.json"

class DataTable extends Component {
  state = ({ visible: [] })

  toggleVisible = (i, evt) => {
    let visible = this.state.visible

    if (visible.includes(i)) {
      visible = visible.filter(x => x !== i)
    } else {
      visible.push(i)
    }

    this.setState({ visible })
  }

  render() {
    const fields = LOCALDATA.fieldLabels
    const details = LOCALDATA.detailLabels

    const { items } = this.props
    const { visible } = this.state

    return (
      <table>
      <thead>
        <tr>
          {Object.values(fields).map(label => (
            <th key={label}>{label}</th>
          ))}
          <th className="util" />
        </tr>
      </thead>
      {items.map((item, i) => (
        <tbody ref={`row-${i}`} key={i}>
          <tr>
            {Object.keys(fields).map(key => (
              <td key={`${i}-${key}`} className={"field--" + key}>{item[key]}</td>
            ))}
            <td className="util">
              <span className={`accordion ${visible.includes(i) ? 'open' : ''}`} onClick={this.toggleVisible.bind(this, i)} />
            </td>
          </tr>
          { visible.includes(i) && (
          <tr>
            <td className="block--alt"></td>
            <td className="block--alt" colSpan="6">
              {Object.keys(details).map(key => (
                <div class="column">
                  <dl key="key" className="block__defs">
                    <dt>{details[key]}</dt>
                    <dd>{item[key] || '-'}</dd>
                  </dl>
                </div>
                ))}
            </td>
          </tr>
            ) }
        </tbody>
      ))}
    </table>
    );
  }
}

export default DataTable;
