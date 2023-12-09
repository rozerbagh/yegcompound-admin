import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { login } from "../../store/authSlice";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: loginForm.email, password: loginForm.password }));
  };
  const handleChangeInput = (e) => {
    // debugger
    const { name, value } = e.target;
    try {
      setLoginForm((ps) => ({
        ...ps,
        [name]: value,
      }));
    } catch (error) {}
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-white shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            {/* <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div> */}
            <div className="btn-wrapper text-center">
              <img
                alt="..."
                width={200}
                src={require("../../assets/img/brand/logo.png")}
              />
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={loginForm.email || ""}
                    onChange={handleChangeInput}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    value={loginForm.password}
                    onChange={handleChangeInput}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="custom-control-input"
                  id="showPassword"
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="showPassword">
                  <span className="text-muted">Show Password</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <Link
              className="text-light"
              to="/auth/register"
              // onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </Link>
          </Col>
        </Row> */}
      </Col>
    </>
  );
};

export default Login;
