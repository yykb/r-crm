import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from "react-router-dom";

import Login from "@pages/Login";
import Home from "@pages/Home";
import Demo from "@pages/Demo";

interface YDProps extends RouteProps {
    auth?: boolean
}
const routes: YDProps[] = [
    {
        path: "/",
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: "/login",
        exact: true,
        component: Login
    },
    {
        path: "/demo",
        exact: true,
        component: Demo
    }
]

const Routes = () => (
    <>
        <Switch>
            {
                routes.map((r,idx) => {
                    const { path, exact, component } = r;
                    const LazyCom: any = component;
                    return (
                        <Route key={idx}
                            exact={exact}
                            path={path}
                            render={() => <LazyCom />} />
                    )
                })
            }
        </Switch>
    </>
)

export default Routes