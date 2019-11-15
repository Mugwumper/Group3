import React from 'react'
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { userEmail } from "../../App";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { fb } from "../../utils/firebase";
import { AuthContext } from "../../App";
import "./style.css";

const INITIAL_STATE = {
  name: "",
  birthday: ""
};

function FamilyAdd() {
  let localIsLogged = React.useContext(AuthContext).isLogged;
  console.log("localIsLogged: "+localIsLogged);
  const [people, setPeople] = React.useState([]);
  const [values, setValues] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    console.log("React.useEffect for family page called..");
    console.log("userEmail: " + userEmail);
    if (userEmail) loadFamily();
  }, [values.name, values.birthday]);


  React.useEffect(() => {
    console.log("new useEffect called");
    if (userEmail) loadFamily();
  }, [localIsLogged]);

  function loadFamily() {
    console.log("loadFamily called");
    API.getFamily({ email: fb.auth().currentUser.providerData[0].email })
      .then(res =>
        { setPeople(res.data[0].family);
          console.log( res.data[0].family );
          console.log( people );
      }
      )
      .catch(err => console.log(err));
  };

  function deleteFamily(id) {
    API.deleteFamily({ 
      email: fb.auth().currentUser.providerData[0].email,
      id: id    
    })
    .then(res => this.loadFamily())
    .catch(err => console.log(err));
  };
  
  function collectEvents(event) {
    event.preventDefault();
    API.scrapeFamily({
      email: fb.auth().currentUser.providerData[0].email
    })
    .then(res => this.loadFamily())
    .catch(err => console.log(err));
  };
  
  function handleInputChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (values.name && values.birthday) {
      API.saveFamily({
        userEmail: fb.auth().currentUser.providerData[0].email,
        name: values.name,
        birthday: values.birthday
      })
        .then(res => {
          this.loadFamily();
          this.collectEvents();
        })
        .catch(err => console.log(err));
    }
  };  

  return (
    <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Add Family Members</h1>
        </Jumbotron>
        <form>
          <Input
            onChange={handleInputChange}
            name="name"
            placeholder="Name (required)"
          />
          <Input
            onChange={handleInputChange}
            name="birthday"
            placeholder="Birthday in ISO 8601 date format (required)"
          />
          <FormBtn
            //disabled={!(state.name && state.birthday)} // temp commenting, get this back in play!
            onClick={handleFormSubmit}
          >
            Add Family Member
          </FormBtn>
        </form>
        <br></br><br></br><br></br>
        <div className="collectEvents">
          <form onSubmit={collectEvents}>
            {people.length ? (
              <List>
                {people.map(person => (
                  <ListItem key={person._id}>
                      <strong>
                        {person.name} - {person.birthday}
                      </strong>
                    <DeleteBtn onClick={() => deleteFamily(person._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            <div style={getStyle_CollectEventsButton}>
              <FormBtn 
                //disbled={people.length === 0}
                disbled="false"
                type="submit" 
              >
                Collect Events
              </FormBtn>
            </div>
          </form>
        </div>
      </Col>
    </Row>
  </Container>
  )
}


const getStyle_CollectEventsButton = {
  margin: "1em 0 0 0.25em",
 }

export default FamilyAdd;
