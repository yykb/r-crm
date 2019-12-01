import * as React from 'react'
import { BrowserRouter } from "react-router-dom"
import Routes from "../routes"

import 'antd/dist/antd.css';

const App = () => {


    return (
        <>
            <BrowserRouter basename="/">
                {Routes()}
            </BrowserRouter>
        </>
    )
}

export default App