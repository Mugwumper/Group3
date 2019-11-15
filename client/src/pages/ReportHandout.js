import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { RList, RListItem } from "../components/List";
import API from "../utils/API";
import {fb} from "../utils/firebase";
import { AuthContext } from "../App";
import "../style.css";

function ReportHandout() {
  let localIsLogged = React.useContext(AuthContext).isLogged;
  const [events, setEvents] = React.useState([]);


  React.useEffect(() => {
    if (fb.auth().currentUser) loadEvents();
  }, [localIsLogged]);

  function loadEvents() {
    API.getEvents({
      email: fb.auth().currentUser.providerData[0].email
    })
      .then(res => setEvents( res.data ))
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>Something To Talk About</h1>
          </Jumbotron>
          {events.length ? (
              <RList>
                  {events.map(event => (
                  <RListItem key={event._id}>
                      <a style={getStyle_link}  className="event-saved" href={event.link}  target="_blank" rel="noopener noreferrer">
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



const getStyle_link = {
  color: "black",
  }

// const getStyle_visited = {
//     color: "black",
//   }

// const getStyle_hover = {
//     color: "rgba(34, 19, 165, 0.7)",
//   }


export default ReportHandout;
