import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import SuperDuper from "./mainpage"

const App = () => <SuperDuper></SuperDuper>

export default ReactDOM.render(<App/>, document.getElementById('root') || document.createElement('div'))
