import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
import { Input, FormBtn } from "../components/Form";

class Family extends Component {
  state = {
    people: [],
    name: "",
    birthday: ""
  };

  componentDidMount() {
    this.loadFamily();
  }

  loadFamily = () => {

    API.getFamily()
      .then(res =>
        //this.setState({ people: res.data, title: "", author: "", synopsis: "" })
        this.setState({ people: res.data, name: "", birthday: "" })
      )
      .catch(err => console.log(err));
  };

  deleteFamily = id => {
    API.deleteFamily(id)
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
        name: this.state.name,
        birthday: this.state.birthday
      })
        .then(res => this.loadFamily())
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
                placeholder="Birthday (required)"
              />
              {/* <TextArea
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.name && this.state.birthday)}
                onClick={this.handleFormSubmit}
              >
                Add Family Member
              </FormBtn>
            </form>
          </Col>



          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>The Family</h1>
            </Jumbotron>
            <form>

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
                  //disbled={}
                  type="submit" 
                >
                  Collect Events
                </FormBtn>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const getStyle_CollectEventsButton = {
  margin: "1em 0 0 0.25em",
 }

export default Family;
