import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './styles.css'

class App extends React.Component {
  state = {
    feeds: []
  }
  componentDidMount() {
    this.fetchData()
  }
  async fetchData() {
    const res = await axios.get(
      'https://api.thingspeak.com/channels/389558/fields/1.json?api_key=L4H94Z52PY7QTL4D&results=2'
    )
    console.log({ res })
    this.setState({ feeds: res.data.feeds })
  }
  render() {
    return (
      <div className="App">
        <h1>thingspeak</h1>
        <ul>
          {this.state.feeds.map((record, i) => (
            <li key={i}>{record.field1}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
