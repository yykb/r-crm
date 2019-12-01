import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from "react-router-dom";

const { Suspense, lazy } = React

const Login = lazy(() =>
    import(/* webpackChunkName:"home" */"../pages/Login")
)
const Home = lazy(() =>
    import(/* webpackChunkName:"home" */"../pages/Home")
)
const Demo = lazy(() =>
    import(/* webpackChunkName:"demo" */"../pages/Demo")
)

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
    <Suspense fallback="">
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
    </Suspense>
)

export default Routes