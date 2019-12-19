import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './pages/App'

ReactDOM.hydrate(<App />, document.getElementById('app'))

if ((module as any).hot) {
    // (module as any).hot.dispose(() => {
    //     console.log('module will be replaced');

    // })
    (module as any).hot.accept(() => {
        console.log('module update');

    })
}