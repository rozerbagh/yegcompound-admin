import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Progress,
  Table,
  UncontrolledTooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "reactstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import { api } from "../../utils/AxiosIstance";
import { orderStatusFlags } from "../../utils";
const OrderTable = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrderTable] = useState([]);
  const fetchAllorders = () => {
    setLoading(true);
    api
      .get("/app/order/all")
      .then(({ data }) => {
        setOrderTable(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAllorders();
  }, []);
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  const toggle = (idx) =>
    dropdownIndex === idx ? setDropdownIndex(-1) : setDropdownIndex(idx);
  return (
    <>
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
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
            {orders.length > 0 &&
              orders.map(
                (order, idx) =>
                  order.user && (
                    <tr>
                      <th scope="row">
                        <h3>
                          {order._id
                            .substring(order._id.length - 6, order._id.length)
                            .toUpperCase()}
                        </h3>
                      </th>
                      <td>
                        {order.compound_name} - {order.quantity}&nbsp;
                        {order.quantity_unit}
                      </td>
                      <td>${order.total_price.toFixed(2)}</td>
                      <td>${order.need_to_pay.toFixed(2)}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i
                            className={`
                              ${
                                order.status === orderStatusFlags.pending
                                  ? "bg-warning"
                                  : order.status === orderStatusFlags.processing
                                  ? "bg-info"
                                  : order.status === orderStatusFlags.dispatched
                                  ? "bg-primary"
                                  : "bg-success"
                              }
                            `}
                          />
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
                              src={require("../../assets/img/theme/user.png")}
                            />
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip742438047"
                          >
                            {order?.user?.fullname}
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
                        <Dropdown
                          isOpen={dropdownIndex === idx}
                          toggle={() => toggle(idx)}
                        >
                          <DropdownToggle>
                            <FiMoreHorizontal />
                          </DropdownToggle>
                          <DropdownMenu>
                            {/* <DropdownItem>
                              <Link
                                to={`/admin/order/${order._id}?downlaoad=true`}
                              >
                                Download Invoice
                              </Link>
                            </DropdownItem> */}

                            <DropdownItem divider />
                            <DropdownItem>
                              <Link to={`/admin/order/${order._id}`}>
                                Details
                              </Link>
                            </DropdownItem>
                            <DropdownItem>Edit</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderTable;
