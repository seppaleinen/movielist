import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from "mobx-react"

const App = () =>
  <div>Hello</div>

export default ReactDOM.render(<App/>, document.getElementById('root') || document.createElement('div'))
