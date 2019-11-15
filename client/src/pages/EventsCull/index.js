import React from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { EList, EListItem } from "../../components/List";
import { fb } from "../../utils/firebase";
import { AuthContext } from "../../App";
import "./style.css";


function EventCull() {
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

  function toggleIsSaved(eventItem) {
    //console.log("eventItem");
    eventItem.isSaved = !eventItem.isSaved;
    API.toggleIsSaved(eventItem)
      .then(res => loadFamily())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>              
            <h1>Cull Events</h1>
            <p>Select events to include</p>
          </Jumbotron>
          {people.length ? (
            <EList>
              {people.map(person => (
                <EListItem key={person._id}>
                  <strong>
                    {person.name} - {person.birthday}
                  </strong>
                  <EList>
                    {person.events.map(event => (
                      <div className={
                          event.isSaved ? 
                            "list-group-item list-group-item-action list-group-flush list-group-item-success" : 
                            "list-group-item list-group-item-action list-group-flush list-group-item-light"}
                        key={event._id}
                        >
                        <div
                          onClick={() => toggleIsSaved(event)}
                        >
                          <input type="checkbox"
                            defaultChecked={event.isSaved}
                          /> 
                          {event.title} - {event.summary}
                        </div>
                      </div>
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

export default EventCull;
