import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Spinner,
} from "reactstrap";
import { baseURL } from "../configs";

function UserApproved() {
  const location = useLocation();
  const [approved, setApproved] = useState({
    data: null,
    approved: false,
  });
  const approveUser = (token) => {
    axios
      .post(`${baseURL}/user/approved`, { usertoken: token })
      .then(({ data }) => {
        console.log(data);
        setApproved((ps) => ({ ...ps, approved: true, data: data }));
      })
      .catch((err) => {
        setApproved((ps) => ({ ...ps, approved: false }));
      });
  };
  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    const token = queryParameters.get("token");
    console.log();
    approveUser(token);
  }, [location]);
  return (
    <div style={{ height: "100vh" }}>
      <Container className="d-flex align-items-center justify-content-center h-100">
        {approved.approved ? (
          <Card className="approval-card">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <img
                alt="user"
                src="https://storebucket.fra1.digitaloceanspaces.com/user.png"
                height={200}
                width={200}
                style={{ borderRadius: "0.375rem" }}
              />
            </div>
            <CardBody>
              <CardTitle tag="h1">Approval of the User</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                User
              </CardSubtitle>
              <CardText>Approved</CardText>
              <Button
                color="primary"
                onClick={() => (window.location.href = "/auth/login")}
              >
                Admin Login
              </Button>
            </CardBody>
          </Card>
        ) : (
          <Spinner className="m-5" color="primary">
            Loading...
          </Spinner>
        )}
      </Container>
    </div>
  );
}

export default UserApproved;
