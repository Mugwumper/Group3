import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { RList, RListItem } from "../components/List";
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
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Something To Talk About</h1>
            </Jumbotron>
            {this.state.events.length ? (
                <RList>
                    {this.state.events.map(event => (
                    <RListItem key={event._id}>
                        <a style={getStyle_link}  className="event-saved" href={event.link}  target="_blank">
                        {event.title} - {event.summary}
                        </a>
                    </RListItem>
                    ))}
                </RList>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}



const getStyle_link = {
  color: "black",
  }

const getStyle_visited = {
    color: "black",
  }

const getStyle_hover = {
    color: "rgba(34, 19, 165, 0.7)",
  }


export default ReportHandout;
