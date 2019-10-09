import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { FormBtn } from "../components/Form";

class FamilyReview extends Component {
  state = {
    people: [],
    user: [], 
    name: "",
    birthday: ""
  };

  componentDidMount() {
    this.loadFamily();
  }

  loadFamily = () => {
    API.getUserPlus()
//    API.getFamily()
      .then(res =>
//        console.log(res) 
//        console.log(res.data[0].family) 
        this.setState({ people: res.data[0].family })
//this.setState({ people: res.data, name: "", birthday: "" })
    )
      .catch(err => console.log(err));
  };

  deleteFamily = id => {
    API.deleteFamily(id)
      .then(res => this.loadFamily())
      .catch(err => console.log(err));
  };

  collectEvents = event => {
    event.preventDefault();
    API.scrapeFamily()
    .then(res => this.loadFamily())
    .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>The Family</h1>
              <p>Review List and Collect Events</p>
            </Jumbotron>
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
          </Col>
        </Row>
      </Container>
    );
  }
}


const getStyle_CollectEventsButton = {
  margin: "1em 0 0 0.25em",
 }

export default FamilyReview;
