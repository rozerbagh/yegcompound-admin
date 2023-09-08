import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
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
} from "reactstrap";
import { FiEdit, FiMoreHorizontal } from "react-icons/fi";
// core components
import Header from "../components/Headers/Header";
import { api } from "../utils/AxiosIstance";
import AddIngredients from "./Indredients/AddIngredients";
const Ingredients = () => {
  const [addModal, setAddModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ingridients, setIngridients] = useState([]);
  const fetchAllIngredients = () => {
    setLoading(true);
    api
      .get("/app/ingredients/all")
      .then(({ data }) => {
        console.log(data);
        setIngridients(data.data);
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
                <div className="flex flex-row justify-between">
                  <h3 className="mb-0">Ingredients</h3>
                  <Button color="primary" onClick={() => setAddModal(true)}>
                    Add Ingredient
                  </Button>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
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
                  {ingridients.length > 0 &&
                    ingridients.map((order, idx) => (
                      <tr>
                        <th scope="row">
                          <h3>
                            {order._id
                              .substring(order._id.length - 6, order._id.length)
                              .toUpperCase()}
                          </h3>
                        </th>
                        <td>{order.name}</td>
                        <td>{order.pack_size}</td>
                        <td>${order.price}</td>
                        <td>
                          <div className="flex flex-row">
                            <Button color="info">Edit</Button>
                            <Button color="danger">Delete</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
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
      <AddIngredients open={addModal} handleToggle={handleToggle} />
    </>
  );
};

export default Ingredients;
