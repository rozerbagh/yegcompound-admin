import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Container,
  Row,
  Button,
  Col,
  Table,
} from "reactstrap";

import { IoCloudDownloadOutline } from "react-icons/io5";
import UpdateStatus from "../../components/Elements/UpdateStatus";
import Header from "../../components/Headers/Header";
import Loader from "../../components/Loader/Loader";
import { api } from "../../utils/AxiosIstance";
import { orderStatus } from "../../utils/index";

import { generatePDF } from "../../utils/download_invoice";
const OrdersDetails = () => {
  const { orderid } = useParams();
  const reportTemplateRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [ordersDetails, setOrdersDetails] = useState(null);
  const fetchOrderDetails = (order_id) => {
    api
      .get("/app/order/get/" + order_id)
      .then(({ data }) => {
        console.log(data.data);
        setOrdersDetails(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (orderid) fetchOrderDetails(orderid);
  }, [orderid]);

  const handleUpdateStatus = (status) => {
    api
      .patch("/app/order/update/" + orderid, { status: status })
      .then(({ data }) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((err) => {});
  };

  return (
    <>
      <Header showCard={false} />
      {/* Page content */}
      <Container fluid>
        {/* Table */}
        <Row ref={reportTemplateRef}>
          <div className="col">
            {loading ? (
              <Loader />
            ) : (
              ordersDetails && (
                <Card className="card-profile shadow" id="invoice-div">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/user.png")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                        className=""
                        size="sm"
                        onClick={() => generatePDF(ordersDetails)}
                      >
                        Download Invoice
                        <span className="ml-2 text-base">
                          <IoCloudDownloadOutline />
                        </span>
                      </Button>

                      {/* <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Send Email
                      </Button> */}
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 mt-5">
                    <div className="text-center">
                      <h3>{ordersDetails.user?.fullname}</h3>
                      <div>
                        Order Status &nbsp;
                        <UpdateStatus
                          allStatus={orderStatus}
                          status={ordersDetails.status}
                          handleStatus={(status) => {
                            handleUpdateStatus(status);
                          }}
                        />
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        {ordersDetails.user?.email},
                        {ordersDetails.user?.phoneno}
                      </div>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        {ordersDetails.user?.address[0]?.city}
                        {", "}
                        {ordersDetails.user?.address[0]?.country}
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        {"Order Details"}
                      </div>
                      <hr className="my-4" />
                      <p>Orders Details and its all ingredients</p>

                      <Row>
                        <Col xs={12} md={6}>
                          <Row>
                            <Col xs={12}>
                              <p className={"text-bold"}>
                                {ordersDetails.compound_name} - &nbsp;
                                {ordersDetails.quantity} gm
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <Table>
                            <thead className="thead-light">
                              <tr>
                                <th scope="col">Ingredient</th>
                                <th scope="col">Percent % </th>
                                <th scope="col">Pack Size</th>
                                <th scope="col">Price / pack</th>
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              {ordersDetails.ingredients.length > 0 &&
                                ordersDetails.ingredients.map((ing, idx) => (
                                  <tr key={idx}>
                                    <td>{ing.name}</td>
                                    <td>{ing.percent}</td>
                                    <td>{ing.pack_size}</td>
                                    <td>{ing.price}</td>
                                    <td></td>
                                  </tr>
                                ))}
                              <tr>
                                <td colSpan={3}></td>
                                <td>
                                  Total Price -{" "}
                                  {ordersDetails.total_price.toFixed(2)}
                                </td>
                                <td>
                                  Pay - {ordersDetails.need_to_pay.toFixed(2)}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                  <CardFooter></CardFooter>
                </Card>
              )
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default OrdersDetails;
