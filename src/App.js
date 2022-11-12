import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const App = () => {

    const [authenticated, setAuthenticate] = React.useState(false);
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user != undefined && user != null) {
            setAuthenticate(true)
        }
    }, [])
    return (
        <Switch>
            {/* {authenticated ? <>
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                <Redirect from="/" to="/admin/index" />
            </> : <>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                    <Redirect from="/" to="/auth" />
                    
            </>} */}
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" />
        </Switch>
    )
}

export default App;