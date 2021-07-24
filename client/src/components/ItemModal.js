import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItem } from "../actions/itemActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ItemModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const toggleModal = (state) => {
    setModal(!modal);
  };

  const dispatch = useDispatch();

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: name,
    };

    dispatch(addItem(newItem));

    toggleModal();
  };

  return (
    <div>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={toggleModal}
      >
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                id="item"
                placeholder="Add to shopping list"
                onChange={onChange}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
