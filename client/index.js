import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './components/landing'
import Projects from './components/projects'

ReactDOM.render(<Landing />, document.querySelector('#landing'))
ReactDOM.render(<Projects />, document.querySelector('#projects'))
