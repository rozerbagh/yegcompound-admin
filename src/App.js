import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthState } from "./store/authSlice"
const App = () => {

    const auth = useSelector((state => state.auth));
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(checkAuthState());
    })
    return (
        <Switch>
            {auth.isLoggedIn ? <>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />
            </> : <>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Redirect from="/" to="/auth/login" />

            </>}
            {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" /> */}
        </Switch>
    )
}

export default App;