import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Spinner,
  Button,
} from "reactstrap";
// core components
import Header from "../components/Headers/Header";
import { baseURL } from "../configs";
import AddUserForm from "../components/Modals/AddUserForm";
import UserOrderSetup from "../components/Modals/UserOrderSetup";
const Users = () => {
  const [loading, setLoading] = useState(true);
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [userSetupFormOpen, setUserSetupFormOpen] = useState(false);
  const [curUser, setCurUser] = useState(null);
  const [users, setUsers] = useState([]);
  const handleAddUser = (userDeatils) => {
    setLoading(true);
    axios
      .post(`${baseURL}/user/signup`, { ...userDeatils })
      .then((res) => {
        fetchAllUsers();
        alert("User added");
        setLoading(false);
      })
      .catch((err) => {
        alert("Unable to add user");
        setLoading(false);
      });
  };
  const fetchAllUsers = () => {
    setLoading(true);
    axios
      .get(`${baseURL}/user/users`)
      .then(({ data }) => {
        console.log(data.data);
        setUsers(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setUsers([]);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  const updateUser = (userDetails) => {
    setLoading(true);
    axios
      .patch(`${baseURL}/user/update/${userDetails._id}`, { ...userDetails })
      .then(({ data }) => {
        fetchAllUsers();
      })
      .catch((err) => {
        setUsers([]);
        setLoading(false);
      });
  };
  const deleteUser = (userDetails) => {
    setLoading(true);
    axios
      .delete(`${baseURL}/user/delete/${userDetails._id}`, { ...userDetails })
      .then(({ data }) => {
        fetchAllUsers();
      })
      .catch((err) => {
        setUsers([]);
        setLoading(false);
      });
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Users</h3>
                <Button onClick={() => setAddFormOpen(true)}>Add user</Button>
              </CardHeader>
              {loading ? (
                <Spinner className="m-5" color="primary">
                  Loading...
                </Spinner>
              ) : (
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Img</th>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Type</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((_u, idx) => (
                      <tr>
                        <th scope="row">
                          <img
                            alt="..."
                            src={
                              _u.image === ""
                                ? "https://storebucket.fra1.digitaloceanspaces.com/user.png"
                                : _u.image
                            }
                            width={50}
                            height={50}
                          />
                          &nbsp;
                          <span className="mb-0 text-sm">{_u.username}</span>
                        </th>
                        <td>{_u._id.substring(0, 6)}</td>
                        <td>
                          <span className="mb-0 text-sm">{_u.fullname}</span>
                        </td>
                        <td>
                          <span className="mb-0 text-sm">{_u.email}</span>
                        </td>
                        <td>
                          {_u.status === 0 ? (
                            <Button
                              onClick={() => updateUser({ ..._u, status: 1 })}
                            >
                              <Badge color="" className="badge-dot">
                                <i className="bg-warning" />
                                In-active
                              </Badge>
                            </Button>
                          ) : (
                            <Button
                              onClick={() => updateUser({ ..._u, status: 0 })}
                            >
                              <Badge color="" className="badge-dot">
                                <i className="bg-primary" />
                                Active
                              </Badge>
                            </Button>
                          )}
                        </td>
                        <td>
                          <span className="mb-0 text-sm">
                            {_u.role === 0 ? "User" : "Admin"}
                          </span>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deleteUser(_u);
                                }}
                              >
                                Delete
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurUser(_u);
                                  setUserSetupFormOpen(true);
                                }}
                              >
                                Edit Setup
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Details
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      {addFormOpen ? (
        <AddUserForm
          open={addFormOpen}
          handleToggel={() => setAddFormOpen((ps) => !ps)}
          handleFormSubmit={handleAddUser}
        />
      ) : null}
      {userSetupFormOpen ? (
        <UserOrderSetup
          userid={curUser?._id}
          open={userSetupFormOpen}
          handleToggel={() => setUserSetupFormOpen((ps) => !ps)}
        />
      ) : null}
    </>
  );
};

export default Users;
