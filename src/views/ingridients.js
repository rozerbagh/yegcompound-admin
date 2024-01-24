import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Button,
  Col,
} from "reactstrap";
import { FiEdit, FiDelete } from "react-icons/fi";
// core components
import Header from "../components/Headers/Header";
import { api } from "../utils/AxiosIstance";
import AddIngredients from "./Indredients/AddIngredients";
import EditIngredients from "./Indredients/EditIngredients";
const nocapsule = "non-capsules";
const capsule = "capsules";
const Ingredients = () => {
  const [addModal, setAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editDetails, setEditDetails] = useState(null);
  const [tableType, setTableType] = useState(nocapsule);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const fetchAllIngredients = () => {
    setLoading(true);
    api
      .get("/app/ingredients/all")
      .then(({ data }) => {
        setIngredients(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAllIngredients();
  }, []);

  const handleToggle = () => setAddModal((ps) => !ps);
  const handleDelete = (id) => {
    api
      .delete(`/app/ingredients/delete/${id}`)
      .then(({ data }) => {
        alert("Deleted Successfully");
        fetchAllIngredients();
      })
      .catch((error) => {
        alert("Unable to delete, due internal server error");
      });
  };
  return (
    <>
      <Header />

      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {" "}
          <Container className="mt--7" fluid>
            <Row>
              <Col xs={12} className="mb-3">
                <Button onClick={() => setTableType(nocapsule)}>
                  Non Capusles Ingredients
                </Button>
                <Button onClick={() => setTableType(capsule)}>
                  Capusles Ingredients
                </Button>
              </Col>
            </Row>
            {tableType === nocapsule ? (
              <Row>
                <Col xs={12}>
                  <Card className="shadow">
                    <CardHeader className="bing-0">
                      <div className="flex flex-row justify-between">
                        <h3 className="mb-0">Non-Capsule Ingredients</h3>
                        <Button
                          color="primary"
                          onClick={() => setAddModal(true)}
                        >
                          Add Ingredient
                        </Button>
                      </div>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Ingredient</th>
                          <th scope="col">Pack Size</th>
                          <th scope="col">Price</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingredients.length > 0 &&
                          ingredients.map(
                            (ing, idx) =>
                              ing.ing_type === nocapsule && (
                                <tr key={idx}>
                                  <th scope="row">
                                    <h3>
                                      {ing._id
                                        .substring(
                                          ing._id.length - 6,
                                          ing._id.length
                                        )
                                        .toUpperCase()}
                                    </h3>
                                  </th>
                                  <td>{ing.name}</td>
                                  <td>{ing.pack_size}</td>
                                  <td>${ing.price}</td>
                                  <td>
                                    <div className="flex flex-row">
                                      <Button
                                        color="info"
                                        onClick={() => {
                                          setEditDetails(ing);
                                          setOpenEditModal(true);
                                        }}
                                      >
                                        <FiEdit />
                                        &nbsp; Edit
                                      </Button>
                                      <Button
                                        color="danger"
                                        onClick={() => handleDelete(ing._id)}
                                      >
                                        <FiDelete />
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              )
                          )}
                      </tbody>
                    </Table>
                    {/* <CardFooter className="py-4">
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
                </CardFooter> */}
                  </Card>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col xs={12}>
                  <Card className="shadow">
                    <CardHeader className="bing-0">
                      <div className="flex flex-row justify-between">
                        <h3 className="mb-0">Capusles - Ingredients</h3>
                        <Button
                          color="primary"
                          onClick={() => setAddModal(true)}
                        >
                          Add Ingredient
                        </Button>
                      </div>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Ingredient</th>
                          <th scope="col">Pack Size</th>
                          <th scope="col">Price</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingredients.length > 0 &&
                          ingredients.map(
                            (ing, idx) =>
                              ing.ing_type === capsule && (
                                <tr key={idx}>
                                  <th scope="row">
                                    <h3>
                                      {ing._id
                                        .substring(
                                          ing._id.length - 6,
                                          ing._id.length
                                        )
                                        .toUpperCase()}
                                    </h3>
                                  </th>
                                  <td>{ing.name}</td>
                                  <td>{ing.pack_size}</td>
                                  <td>${ing.price}</td>
                                  <td>
                                    <div className="flex flex-row">
                                      <Button
                                        color="info"
                                        onClick={() => {
                                          setEditDetails(ing);
                                          setOpenEditModal(true);
                                        }}
                                      >
                                        <FiEdit />
                                        &nbsp; Edit
                                      </Button>
                                      <Button
                                        color="danger"
                                        onClick={() => handleDelete(ing._id)}
                                      >
                                        <FiDelete />
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              )
                          )}
                      </tbody>
                    </Table>
                    {/* <CardFooter className="py-4">
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
                    </CardFooter> */}
                  </Card>
                </Col>
              </Row>
            )}
          </Container>
          {addModal ? (
            <AddIngredients
              open={addModal}
              handleToggle={handleToggle}
              ing_type={tableType}
            />
          ) : null}
          {openEditModal ? (
            <EditIngredients
              ingredient={editDetails}
              open={openEditModal}
              handleToggle={() => setOpenEditModal((ps) => !ps)}
              ing_type={tableType}
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default Ingredients;
