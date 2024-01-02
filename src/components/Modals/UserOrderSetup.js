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
  ModalFooter,
  ModalBody,
  ModalHeader,
  Modal,
} from "reactstrap";
import { api } from "../../utils/AxiosIstance";
const setting_name = {
  capsule: "capsule",
  compound: "compound",
};
const Settings = ({ userId, handleToggel }) => {
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
      .get(`/app/user-setting/${userId}?admin=true`)
      .then(({ data }) => {
        console.log(data.data);
        const _s = { ...compoundSettings };
        const [compoundSetup] = data.data.filter(
          (_d) => _d.setting_name === "compound"
        );
        console.log(compoundSetup);
        setUpdateId(compoundSetup._id);
        _s.container_cost.value = compoundSetup.container_cost;
        _s.delivery_fee.value = compoundSetup.delivery_fee;
        _s.labour_hour_rate.value = compoundSetup.labour_hour_rate;
        _s.rebate.value = compoundSetup.rebate;
        _s.markup.value = compoundSetup.markup;
        setCompoundSettings(_s);

        const [capsuleSetup] = data.data.filter(
          (_d) => _d.setting_name === "capsule"
        );
        console.log(capsuleSetup);
        setCapsuleId(capsuleSetup._id);
        const _sC = { ...capsuleSettings };
        _sC.container_cost.value = capsuleSetup.container_cost;
        _sC.delivery_fee.value = capsuleSetup.delivery_fee;
        _sC.labour_hour_rate.value = capsuleSetup.labour_hour_rate;
        _sC.rebate.value = capsuleSetup.rebate;
        _sC.markup.value = capsuleSetup.markup;
        setCapsuleSettings(_sC);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    fetchSettings();
  }, []);

  const handleInputChange = (e, controlName, type = "compound") => {
    const { name, value } = e.target;
    if (type === "capsule") {
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
      (ele) => (params[ele] = compoundSettings[ele].value)
    );
    api
      .patch("/app/setting/update/" + id, params)
      .then(({ data }) => {
        console.log(data.data);
        handleToggel();
      })
      .catch((error) => {
        alert(error?.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <>
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
                              onChange={(e) =>
                                handleInputChange(e, key, "compound")
                              }
                              value={compoundSettings[key].value}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
                <CardFooter className="py-4 d-flex flex-row-reverse">
                  <Button
                    color="success"
                    type="button"
                    onClick={(e) => handleSubmit(e, updateId)}
                  >
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
                            onChange={(e) =>
                              handleInputChange(e, key, "capsule")
                            }
                            value={capsuleSettings[key].value}
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  ))}
                </Row>
              </CardBody>

              <CardFooter className="py-4 d-flex flex-row-reverse">
                <Button
                  color="success"
                  type="sumit"
                  onClick={(e) => handleSubmit(e, capsuleId)}
                >
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

function UserOrderSetup({ open, handleToggel, userid }) {
  return (
    <Modal isOpen={open} toggle={handleToggel}>
      <ModalHeader toggle={handleToggel}>
        <h1>Add user</h1>
      </ModalHeader>
      <ModalBody>
        <Settings handleToggel={handleToggel} userId={userid} />
      </ModalBody>
      <ModalFooter>
        {/* <Button color="primary" onClick={() => {}}>
          Add
        </Button>{" "} */}
        <Button color="secondary" onClick={handleToggel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default UserOrderSetup;
