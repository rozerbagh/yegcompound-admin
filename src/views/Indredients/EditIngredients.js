import React, { useEffect, useState } from "react";
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

function EditIngredients({
  open,
  handleToggle,
  ing_type,
  ingredient,
  fetchAllIngredients,
  ...args
}) {
  console.log(ing_type);
  const [formDetails, setFormDetails] = useState({
    name: "",
    pack_size: "",
    price: "",
  });
  useEffect(() => {
    if (ingredient) {
      setFormDetails({
        name: ingredient.name,
        pack_size: ingredient.pack_size,
        price: ingredient.price,
      });
    }
  }, [ingredient]);
  const handleSubmit = (ingredient) => {
    api
      .patch(`/app/ingredients/update/${ingredient._id}`, {
        ...ingredient,
        ing_type: ing_type,
      })
      .then(({ data }) => {
        alert(data.message);
        handleToggle();
        fetchAllIngredients();
      })
      .catch((err) => {
        alert("Something went wrong");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((ps) => ({ ...ps, [name]: value }));
  };
  return (
    <Modal isOpen={open} toggle={handleToggle} {...args}>
      <ModalHeader toggle={handleToggle}>Edit Ingredient</ModalHeader>
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
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditIngredients;
