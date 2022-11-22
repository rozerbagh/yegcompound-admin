import { useEffect, useState } from "react";
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
    InputGroupText,
} from "reactstrap";
// core components
import Header from "../components/Headers/Header";
import { api } from "../utils/AxiosIstance";
const Settings = () => {
    const [updateId, setUpdateId] = useState("");
    const [compoundSettings, setCompoundSettings] = useState({
        markup: {
            type: "number",
            required: true,
            value: "",
            placeholder: "Markup",
        },
        rebate: {
            type: "number",
            required: true,
            value: "",
            placeholder: "Rebate",
        },
        labour_hour_rate: {
            type: "number",
            required: true,
            value: "",
            placeholder: "Labour hourly rate",
        },
        container_cost: {
            type: "number",
            required: true,
            value: "",
            placeholder: "Container Cost",
        },
        delivery_fee: {
            type: "number",
            required: true,
            value: "",
            placeholder: "Deliver Fee",
        },
        // franchise_fee: {
        //     type: "number",
        //     required: true,
        //     value: "",
        //     placeholder: "Franchise Fee",
        // },
    });
    const fetchSettings = () => {
        api
            .get("/app/setting/all")
            .then(({ data }) => {
                console.log(data.data);
                setUpdateId(data.data[0]._id);
                const _s = { ...compoundSettings };
                _s.container_cost.value = data.data[0].container_cost;
                _s.delivery_fee.value = data.data[0].delivery_fee;
                _s.labour_hour_rate.value = data.data[0].labour_hour_rate;
                _s.rebate.value = data.data[0].rebate;
                _s.markup.value = data.data[0].markup;
                setCompoundSettings(_s);
            })
            .catch((error) => { });
    };
    useEffect(() => {
        fetchSettings();
    }, []);

    const handleInputChange = (e, controlName) => {
        setCompoundSettings((prevState) => ({
            ...prevState,
            [controlName]: {
                ...prevState[controlName],
                value: parseInt(e.target.value),
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = {};
        Object.keys(compoundSettings).forEach(
            (ele) => params[ele] = compoundSettings[ele].value
        );
        debugger;
        api
            .patch("/app/setting/update/" + updateId, params)
            .then(({ data }) => {
                debugger;
                console.log(data.data);
            })
            .catch((error) => { });
    };

    return (
        <>
            <Header showCard={false} />
            {/* Page content */}
            <Container fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Form role="form" onSubmit={handleSubmit}>
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Compound Setings</h3>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        {Object.keys(compoundSettings).map((key, idx) => (
                                            <Col xs={12} sm={12} md={6} key={idx}>
                                                <FormGroup className="mb-3">
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <span>$</span>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder={compoundSettings[key].placeholder}
                                                            type={compoundSettings[key].type}
                                                            required={compoundSettings[key].reqired}
                                                            onChange={(e) => handleInputChange(e, key)}
                                                            value={compoundSettings[key].value}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        ))}
                                    </Row>
                                </CardBody>
                                <CardFooter className="py-4 d-flex flex-row-reverse">
                                    <Button color="success" type="button" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Form>
                    </div>
                </Row>
                <br />
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Capsule Setings</h3>
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
                                </Form>
                            </CardBody>

                            <CardFooter className="py-4 d-flex flex-row-reverse">
                                <Button color="success" type="sumit">
                                    Submit
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Settings;
