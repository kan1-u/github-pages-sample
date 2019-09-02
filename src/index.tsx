import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

navigator.serviceWorker.register('./service-worker.js').then(e => { })
