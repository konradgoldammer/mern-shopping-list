import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import * as actionsCreators from "../actions/itemActions";
import { bindActionCreators } from "redux";

const ShoppingList = () => {
  const state = useSelector((state) => state);
  console.log();
  const items = state.item.items;
  const dispatch = useDispatch();

  const { getItems, deleteItem } = bindActionCreators(
    actionsCreators,
    dispatch
  );

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ name, _id }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    deleteItem(_id);
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
