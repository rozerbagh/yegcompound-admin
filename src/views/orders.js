import React, { useEffect, useState } from "react";
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button
} from "reactstrap";
// core components
import Header from "../components/Headers/Header";
import { api } from "../utils/AxiosIstance";
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const fetchAllorders = () => {
        api.get('/app/order/all').then(({ data }) => {
            setOrders(data.data)
        }).catch(error => {

        })
    }
    useEffect(() => {
        fetchAllorders();
    }, [])
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
                                <h3 className="mb-0">Orders</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">Paid Price</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">User</th>
                                        <th scope="col">Completion</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length > 0 && orders.map((order, idx) => <tr>
                                        <th scope="row">
                                            <h3>
                                                {order._id.substring(order._id.length - 6, order._id.length).toUpperCase()}
                                            </h3>
                                        </th>
                                        <td>{order.compound_name} - {order.quantity}&nbsp;{order.quantity_unit}</td>
                                        <td>${order.total_price.toFixed(2)}</td>
                                        <td>${order.need_to_pay.toFixed(2)}</td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className={
                                                    order.status === 'ordered' ? "bg-warning" :
                                                        order.status === 'dispatched' ? "bg-info" :
                                                            order.status === 'shipped' ? "bg-primary" :
                                                                "bg-success"
                                                } />
                                                {order.status}
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <div
                                                    className="avatar avatar-sm"
                                                    href="#pablo"
                                                    id="tooltip742438047"
                                                >
                                                    <img
                                                        alt="user"
                                                        className="rounded-circle"
                                                        src={require("../assets/img/theme/user.png")}
                                                    />
                                                </div>
                                                <UncontrolledTooltip
                                                    delay={0}
                                                    target="tooltip742438047"
                                                >
                                                    {order?.user.fullname}
                                                </UncontrolledTooltip>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="mr-2">60%</span>
                                                <div>
                                                    <Progress
                                                        max="100"
                                                        value="60"
                                                        barClassName="bg-primary"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <Button size="small" color="info">Details</Button>
                                            <Button size="small" type="outlined" color="info">Edit</Button>
                                        </td>
                                    </tr>)}
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
        </>
    );
};

export default Orders;
