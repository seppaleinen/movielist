import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import { Provider } from "mobx-react"


describe("Testing index", function() {
  var App
  beforeEach(function() {
    App = () =>
      <div></div>
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})

