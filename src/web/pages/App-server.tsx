import * as React from 'react'
import { StaticRouter } from "react-router-dom"
import Routes from "../routes/index-server"

import 'antd/dist/antd.css';

const App = (url: string) => {
    return (
        <>
            <StaticRouter location={url}>
                {Routes()}
            </StaticRouter>
        </>
    )
}

export default App