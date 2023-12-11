import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthState } from "./store/authSlice";
import UserApproved from "./views/UserApproved";
import UserDecline from "./views/UserDecline";
import NotFound from "./views/NotFound";
const App = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch history={history}>
      <Route exact path="/user-approved">
        <UserApproved />
      </Route>
      <Route exact path="/user-decline">
        <UserDecline />
      </Route>
      {auth.isLoggedIn ? (
        <>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to={localStorage.getItem("pathname")} />
        </>
      ) : (
        <>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect from="/" to="/auth/login" />
        </>
      )}
      {/* <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/admin/index" /> */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
