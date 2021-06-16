import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'
import App from './components/App'

const container = document.getElementById('app')

// ReactDOM.render(<Badge
//     firstName="Felip" 
//     lastName="Gomez"
//     avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//     jobTitle="Frontend Engineer web"
//     twiter="acalvog"
// />, container)

ReactDOM.render(<App/>,container)

