import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { RList, RListItem } from "../components/List";
import API from "../utils/API";
import {fb} from "../utils/firebase";
import { AuthContext } from "../App";
import "../style.css";

function ReportAnswerKey() {
  let localIsLogged = React.useContext(AuthContext).isLogged;
  const [people, setPeople] = React.useState([]);
  
  React.useEffect(() => {
    if (fb.auth().currentUser) loadFamily();
  }, [localIsLogged]);

  function loadFamily() {
    API.getUserPlus({
      email: fb.auth().currentUser.providerData[0].email
    })
      .then(res =>
        setPeople(res.data[0].family)
    )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>Answer Key</h1>
          </Jumbotron>
          {people.length ? (
            <RList>
              {people.map(person => (
                <RListItem key={person._id}>
                  <strong>
                    {person.name} - {person.birthday}
                  </strong>
                  <RList>
                    {person.events.map(event => (
                      event.isSaved ? 
                      <RListItem key={event._id}>
                        <div className="event-saved">
                          {event.title} - {event.summary}
                        </div>
                      </RListItem> : null
                    ))}
                  </RList>
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

export default ReportAnswerKey;
