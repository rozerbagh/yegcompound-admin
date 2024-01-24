import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { api } from "../../utils/AxiosIstance";

function AddIngredients({
  open,
  handleToggle,
  ing_type,
  fetchAllIngredients,
  ...args
}) {
  console.log(ing_type);
  const [formDetails, setFormDetails] = useState({
    name: "",
    pack_size: "",
    price: "",
  });
  const handleSubmit = (bodydata) => {
    api
      .post("/app/ingredients/add", { ...bodydata, ing_type: ing_type })
      .then(({ data }) => {
        console.log(data);
        alert("successfully addeed");
        handleToggle();
        fetchAllIngredients();
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((ps) => ({ ...ps, [name]: value }));
  };
  return (
    <Modal isOpen={open} toggle={handleToggle} {...args}>
      <ModalHeader toggle={handleToggle}>Add Ingredient</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="name">Name of Ingredient</Label>
          <Input
            id="name_ingredients"
            name="name"
            placeholder="Name ingredients"
            type="text"
            value={formDetails.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pack_size_ingredients">Pack size of Ingredient</Label>
          <Input
            id="pack_size_ingredients"
            name="pack_size"
            placeholder="pack size ingredients"
            type="number"
            value={formDetails.pack_size}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pack_size_ingredients">Price of Ingredient</Label>
          <Input
            id="price_ingredients"
            name="price"
            placeholder="price of ingredients"
            type="number"
            value={formDetails.price}
            onChange={handleInputChange}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleToggle}>
          Cancel
        </Button>{" "}
        <Button color="primary" onClick={() => handleSubmit(formDetails)}>
          Add
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddIngredients;
