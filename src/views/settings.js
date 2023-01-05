import React, { useEffect, useState } from "react";
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
    Label,
} from "reactstrap";
// core components
import Header from "../components/Headers/Header";
import { api } from "../utils/AxiosIstance";
const Settings = () => {
    const [updateId, setUpdateId] = useState("");
    const [capsuleId, setCapsuleId] = useState("");
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
    const [capsuleSettings, setCapsuleSettings] = useState({
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

                setCapsuleId(data.data[1]._id);
                const _sC = { ...compoundSettings };
                _sC.container_cost.value = data.data[1].container_cost;
                _sC.delivery_fee.value = data.data[1].delivery_fee;
                _sC.labour_hour_rate.value = data.data[1].labour_hour_rate;
                _sC.rebate.value = data.data[1].rebate;
                _sC.markup.value = data.data[1].markup;
                setCapsuleSettings(_sC);
            })
            .catch((error) => { });
    };
    useEffect(() => {
        fetchSettings();
    }, []);

    const handleInputChange = (e, controlName, type = 'compound') => {
        const { name, value } = e.target;
        if (type === 'capsule') {
            setCapsuleSettings((prevState) => ({
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value: parseInt(value),
                },
            }));
        } else {
            setCompoundSettings((prevState) => ({
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value: parseInt(value),
                },
            }));
        }
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const params = {};
        Object.keys(compoundSettings).forEach(
            (ele) => params[ele] = compoundSettings[ele].value
        );
        debugger;
        api
            .patch("/app/setting/update/" + id, params)
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
                                                    <Label>{key.toLocaleUpperCase()}</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <span>$</span>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            name={key}
                                                            placeholder={compoundSettings[key].placeholder}
                                                            type={compoundSettings[key].type}
                                                            required={compoundSettings[key].reqired}
                                                            onChange={(e) => handleInputChange(e, key, 'compound')}
                                                            value={compoundSettings[key].value}
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        ))}
                                    </Row>
                                </CardBody>
                                <CardFooter className="py-4 d-flex flex-row-reverse">
                                    <Button color="success" type="button" onClick={(e) => handleSubmit(e, updateId)}>
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
                                <Row>
                                    {Object.keys(capsuleSettings).map((key, idx) => (
                                        <Col xs={12} sm={12} md={6} key={idx}>
                                            <FormGroup className="mb-3">
                                                <Label>{key.toLocaleUpperCase()}</Label>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <span>$</span>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name={key}
                                                        placeholder={capsuleSettings[key].placeholder}
                                                        type={capsuleSettings[key].type}
                                                        required={capsuleSettings[key].reqired}
                                                        onChange={(e) => handleInputChange(e, key, 'capsule')}
                                                        value={capsuleSettings[key].value}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    ))}
                                </Row>
                            </CardBody>

                            <CardFooter className="py-4 d-flex flex-row-reverse">
                                <Button color="success" type="sumit" onClick={(e) => handleSubmit(e, capsuleId)}>
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
