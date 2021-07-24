import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreators from "../actions/itemActions";

const ShoppingList = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const items = state.item.items;
  const dispatch = useDispatch();

  const { getItems, deleteItem } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    deleteItem(id);
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
