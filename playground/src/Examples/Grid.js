import React from "react";
import styled from "styled-components";
import {
  Col,
  Row,
  Grid,
  ListGroup,
  ListItem,
  Footer,
  Switch,
  SegmentControl,
  Button,
  Input,
  TextArea,
  Checkbox,
  Alarm
} from "terk-ui";

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

export const ExampleGrid = () => {
  const segments = ["Metro", "Bus", "Train", "Scooter"];
  const [isChecked, setCheck] = React.useState(false);
  const [option, setOption] = React.useState("metro");
  const handleChange = React.useCallback(
    (event) => {
      const target = event.currentTarget;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      if (name === "switch-check") {
        setCheck(value);
      }
      if (segments.map((option) => option.toLowerCase()).includes(name)) {
        setOption(value);
      }
    },
    [isChecked]
  );

  return (
    <>
      <Header>
        <h1>Chania</h1>
      </Header>
      {/* <Grid container={true}>
        <Grid gutter={5} item={true} md={11} xs={11} lg={4}>
          <ListGroup>
            <ListItem divider accent="#f9b115">
              The Flight
            </ListItem>
            <ListItem divider accent="#39f">
              The City
            </ListItem>
            <ListItem divider>The Island</ListItem>
            <ListItem divider>The Food</ListItem>
          </ListGroup>
        </Grid>

        <Grid gutter={5} item={true} md={11} xs={11} lg={4}>
          <h1>The City</h1>
          <p>
            Chania is the capital of the Chania region on the island of Crete.
            The city can be divided in two parts, the old town and the modern
            city.
          </p>
        </Grid>
        <Grid flex={true} justify="center" gutter={5} item={true} md={11} xs={11} lg={4}>
          <Aside>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </Aside>
        </Grid>
      </Grid> */}
      {/* <Row className="mt-small mb-small ml-small">
        <Switch
          handleChange={handleChange}
          checked={isChecked}
          name="switch-check"
        />
      </Row>
      <Row className="mt-small mb-small ml-small">
        <SegmentControl
          handleChange={handleChange}
          names={segments}
          checked={false}
          selected={option}
        />
      </Row>

      <Row className="mt-small mb-small ml-small">
        <Button text="Submit" variant="outline" />
      </Row>
      <Row className="mt-small mb-small ml-small">
        <Button text="Submit" color="danger" />
      </Row>
      <Row className="mt-small mb-small ml-small">
        <Input />
      </Row>
      <Row className="mt-small mb-small ml-small">
        <TextArea />
      </Row>
      <Row className="mt-small mb-small ml-small">
        <Checkbox />
      </Row> */}
      <Button fullWidth={true}>
        Submit
      </Button>
      <Alarm />
      <Footer>
        <p>
          Resize the browser window to see how the content respond to the
          resizing.
        </p>
      </Footer>
    </>
  );
};
