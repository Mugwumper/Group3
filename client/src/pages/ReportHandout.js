import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { EList, EListItem } from "../components/EventList";
import API from "../utils/API";
import {fb} from "../firebase";
import "../style.css";

class ReportHandout extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    if (fb.auth().currentUser) this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents({
      email: fb.auth().currentUser.providerData[0].email
    })
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Something To Talk About</h1>
            </Jumbotron>
            {this.state.events.length ? (
                <EList>
                    {this.state.events.map(event => (
                    <EListItem key={event._id}>
                        <div className="event-saved">
                        {event.title} - {event.summary}
                        </div>
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

export default ReportHandout;
