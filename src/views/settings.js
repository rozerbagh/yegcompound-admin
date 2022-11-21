import { useEffect, useState } from "react";
import axios from "axios"
import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Container,
    Row,
    Button,
    Form,
    Input,
    Col,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
// core components
import Header from "../components/Headers/Header";
import { getAllOrders } from "../server"
const Settings = () => {
    const [orders, setOrders] = useState([]);
    const fetchAllorders = () => {
        axios.get(getAllOrders).then(({ data }) => {
            setOrders(data.data)
        }).catch(error => {

        })
    }
    useEffect(() => {
        fetchAllorders();
    }, [])
    return (
        <>
            <Header showCard={false} />
            {/* Page content */}
            <Container fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Setings</h3>
                            </CardHeader>
                            <CardBody>
                                <Form role="form">
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Email"
                                                type="number"
                                                autoComplete="new-email"
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
                                                type="password"
                                                autoComplete="new-password"
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            id=" customCheckLogin"
                                            type="checkbox"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor=" customCheckLogin"
                                        >
                                            <span className="text-muted">Remember me</span>
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <Button className="my-4" color="primary" type="button">
                                            Sign in
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>

                            <CardFooter className="py-4 d-flex flex-row-reverse">
                                <Button color="success">Submit</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Settings;
