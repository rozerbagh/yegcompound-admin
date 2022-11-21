import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import { useSelector } from "react-redux"
const App = () => {

    const auth = useSelector((state => state.auth))
    return (
        <Switch>
            {auth.isLoggedIn ? <>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />
            </> : <>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Redirect from="/" to="/auth" />

            </>}
            {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" /> */}
        </Switch>
    )
}

export default App;