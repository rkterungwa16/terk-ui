import React from "react";
import styled from "styled-components";
import Col from "./Col";
import Row from "./Row";
import ListGroup from "../Lists/ListGroup";
import ListItem from "../Lists/ListItem";
import Footer from "../Footer/Footer";
const Header = styled.div`
  background-color: #9933cc;
  color: #ffffff;
  padding: 15px;
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    background-color: #0099cc;
  }
`;

const Aside = styled.div`
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const ExampleGrid = () => (
  <>
    <Header>
      <h1>Chania</h1>
    </Header>
    <Row>
      <Col md="11" xs="11" lg="4">
        <ListGroup>
          <ListItem>The Flight</ListItem>
          <ListItem>The City</ListItem>
          <ListItem>The Island</ListItem>
          <ListItem>The Food</ListItem>
        </ListGroup>
      </Col>

      <Col md="11" xs="9" lg="4">
        <h1>The City</h1>
        <p>
          Chania is the capital of the Chania region on the island of Crete. The
          city can be divided in two parts, the old town and the modern city.
        </p>
      </Col>
      <Col md="11" xs="12" lg="4">
        <Aside>
          <p>Chania is a city on the island of Crete.</p>
          <h2>Where?</h2>
          <p>Crete is a Greek island in the Mediterranean Sea.</p>
          <h2>How?</h2>
          <p>You can reach Chania airport from all over Europe.</p>
        </Aside>
      </Col>
    </Row>
    <Footer>
      <p>
        Resize the browser window to see how the content respond to the
        resizing.
      </p>
    </Footer>
  </>
);
