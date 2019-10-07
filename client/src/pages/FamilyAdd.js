import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class FamilyAdd extends Component {
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
        this.setState({ people: res.data, name: "", birthday: "" })
      )
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
                placeholder="Birthday in ISO 8601 date format (required)"
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
        </Row>
      </Container>
    );
  }
}

export default FamilyAdd;
