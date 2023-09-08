import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { api } from "../../utils/AxiosIstance";

function AddIngredients({ open, handleToggle, ...args }) {
  const [formDetails, setForemDetails] = useState({
    name: "",
    pack_size: 0,
    price: 0,
  });
  const handleSubmit = () => {
    api
      .post("/app/ingredients/add", {})
      .then(({ data }) => {
        alert("successfully addeed");
        handleToggle();
      })
      .catch((error) => {
        alert(error.toString());
      });
  };
  return (
    <Modal isOpen={open} toggle={handleToggle} {...args}>
      <ModalHeader toggle={handleToggle}>Add Ingredient</ModalHeader>
      <ModalBody>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <FormGroup>
            <Label for="name_ingredients">Name of Ingredient</Label>
            <Input
              id="name_ingredients"
              name="name_ingredients"
              placeholder="Name ingredients"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="pack_size_ingredients">Pack size of Ingredient</Label>
            <Input
              id="pack_size_ingredients"
              name="pack_size_ingredients"
              placeholder="pack size ingredients"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="pack_size_ingredients">Price of Ingredient</Label>
            <Input
              id="price_ingredients"
              name="price_ingredients"
              placeholder="price of ingredients"
              type="number"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleToggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={handleToggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddIngredients;
