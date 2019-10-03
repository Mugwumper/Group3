import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./style.css";
// import { Input, FormBtn } from "../components/Form";

class Report1 extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    this.loadFamily();
  }

  loadFamily = () => {
    API.getFamily()
      .then(res => this.setState({ people: res.data, name: "", birthday: "" }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>The Events</h1>
            </Jumbotron>
              {this.state.people.length ? (
                <List>
                  {this.state.people.map(person => (
                    <ListItem key={person._id}>
                        <strong>
                          {person.name} - {person.birthday}
                        </strong>
                        <List>
                            {person.events.map(event => (
                                <ListItem key={event._id}>
                                    <div 
                                    className={
                                    event.isSaved
                                      ? "event-saved"
                                      : "event-ignored"
                                    }>
                                        <strong>
                                            {event.title} - {event.summary}
                                        </strong>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Report1;
