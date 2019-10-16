import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { userEmail } from "../../App";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { fb } from "../../firebase";

class FamilyAdd extends Component {
  state = {
    people: [],
    name: "",
    birthday: ""
  };

  //TODO this uses both userEmail and the 'fb...email' pick one!

  componentDidMount() {
    console.log("componentDidMount for family page called..");
    console.log("userEmail: " + userEmail);
    if (userEmail) this.loadFamily();
  }

  loadFamily = () => {
    API.getFamily({ email: fb.auth().currentUser.providerData[0].email })
      .then(res =>
        this.setState({ people: res.data[0].family })
      )
      .catch(err => console.log(err));
  };

  deleteFamily = id => {
    API.deleteFamily({ 
      email: fb.auth().currentUser.providerData[0].email,
      id: id    
    })
    .then(res => this.loadFamily())
    .catch(err => console.log(err));
  };

  collectEvents = event => {
    event.preventDefault();
    API.scrapeFamily({
      email: fb.auth().currentUser.providerData[0].email
    })
    .then(res => this.loadFamily())
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.birthday) {
      API.saveFamily({
        userEmail: fb.auth().currentUser.providerData[0].email,
        name: this.state.name,
        birthday: this.state.birthday
      })
        .then(res => {
          this.loadFamily();
          this.collectEvents();
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Family Members</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="birthday"
                placeholder="Birthday in ISO 8601 date format (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.birthday)}
                onClick={this.handleFormSubmit}
              >
                Add Family Member
              </FormBtn>
            </form>
            <hr></hr>
            <div className="collectEvents">
              <form onSubmit={this.collectEvents}>
                {this.state.people.length ? (
                  <List>
                    {this.state.people.map(person => (
                      <ListItem key={person._id}>
                        <Link to={"/family/" + person._id}>
                          <strong>
                            {person.name} - {person.birthday}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteFamily(person._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
                <div style={getStyle_CollectEventsButton}>
                  <FormBtn 
                    //disbled={this.state.people.length === 0}
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
    );
  }
}

const getStyle_CollectEventsButton = {
  margin: "1em 0 0 0.25em",
 }

export default FamilyAdd;
