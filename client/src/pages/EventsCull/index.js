import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { EList, EListItem } from "../../components/EventList";
import "./style.css";


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

  toggleIsSaved = eventItem => {
    console.log("eventItem");
    eventItem.isSaved = !eventItem.isSaved;
    API.toggleIsSaved(eventItem)
      .then(res => this.loadFamily())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>The Events</h1>
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
                        <EListItem 
                          key={event._id}
                          >
                          <div
                            className={
                              event.isSaved ? "event-saved" : "event-ignored"
                            }
                            onClick={() => this.toggleIsSaved(event)}
                          >
                            <input type="checkbox"
                              defaultChecked={event.isSaved}
                            /> 
                            {event.title} - {event.summary}
                          </div>
                        </EListItem>
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

export default Report1;
