import React, { useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
function AddUserForm({ open, handlClose, handleToggel, handleFormSubmit }) {
  const adminRef = useRef(null);
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
      name: "password",
      type: "password",
      placeholder: "Enter the password",
      value: "",
      valid: false,
      validfunc: (val) => {},
    },
    phoneno: {
      name: "phoneno",
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
        <input
          ref={adminRef}
          onChange={(e) => {}}
          id="admin-checkbox"
          type="checkbox"
        />
        &nbsp; Is Admin ?
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() =>
            handleFormSubmit({
              ...userDetails,
              address: [],
              role: adminRef.current?.checked ? 1 : 0,
              status: 0,
              image: "https://storebucket.fra1.digitaloceanspaces.com/user.png",
            })
          }
        >
          Add
        </Button>{" "}
        <Button color="secondary" onClick={handleToggel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddUserForm;
