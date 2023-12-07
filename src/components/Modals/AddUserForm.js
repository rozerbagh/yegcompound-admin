import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function AddUserForm({ open, handlClose, handleToggel, handleFormSubmit }) {
  const [userDetails, setUserDetails] = useState({
    fullname: {
      name: "fullname",
      type: "text",
      placeholder: "Fullname",
      value: "",
      valid: false,
      validfunc: (val) => {},
    },
    email: {
      name: "email",
      type: "email",
      placeholder: "name@example.com",
      value: "",
      valid: false,
      validfunc: (val) => {},
    },
    password: {
      name: "paasword",
      type: "paasword",
      placeholder: "Enter the password",
      value: "",
      valid: false,
      validfunc: (val) => {},
    },
    phoneno: {
      name: "phone",
      type: "number",
      placeholder: "Enter the phone",
      value: "",
      valid: false,
      validfunc: (val) => {},
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((ps) => ({
      ...ps,
      [name]: {
        ...ps[name],
        value: value,
      },
    }));
  };
  return (
    <Modal isOpen={open} toggle={handleToggel}>
      <ModalHeader toggle={handleToggel}>
        <h1>Add user</h1>
      </ModalHeader>
      <ModalBody>
        {Object.keys(userDetails).map((key, index) => (
          <input
            type={userDetails[key].type}
            name={userDetails[key].name}
            value={userDetails[key].value || ""}
            class="form-control mb-2"
            id="exampleFormControlInput1"
            placeholder={userDetails[key].placeholder}
            onChange={handleChange}
          />
        ))}
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() =>
            handleFormSubmit({
              ...userDetails,
              address: [],
              role: 0,
              status: 0,
              image: "https://storebucket.fra1.digitaloceanspaces.com/user.png",
            })
          }
        >
          Add
        </Button>{" "}
        <Button color="secondary" onClick={handlClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddUserForm;
