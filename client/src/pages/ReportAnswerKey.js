import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { EList, EListItem } from "../components/EventList";
import API from "../utils/API";
import "../style.css";

class ReportAnswerKey extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    this.loadFamilyAndEvents();
  }

  loadFamilyAndEvents = () => {
    API.getAnswerKey()
      .then(res => this.setState({ people: res.data, name: "", birthday: "" }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Answer Key</h1>
            </Jumbotron>
            {this.state.people.length ? (
              <EList>
                {this.state.people.map(person => (
                  <EListItem key={person._id}>
                    <strong>
                      {person.name} - {person.birthday}
                    </strong>
                    <EList>
                      {person.events.map(event => (
                        event.isSaved ? 
                        <EListItem key={event._id}>
                          <div className="event-saved">
                            {event.title} - {event.summary}
                          </div>
                        </EListItem> : null
                      ))}
                    </EList>
                  </EListItem>
                ))}
              </EList>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReportAnswerKey;
