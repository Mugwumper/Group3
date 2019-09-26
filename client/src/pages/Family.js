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
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {

    API.getBooks()
      .then(res =>
        this.setState({ people: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));

  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
                name="title"
                placeholder="Name (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="author"
                placeholder="Birthday (required)"
              />
              {/* <TextArea
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
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
            {this.state.people.length ? (
              <List>
                {this.state.people.map(person => (
                  <ListItem key={person._id}>
                    <Link to={"/books/" + person._id}>
                      <strong>
                        {person.title} by {person.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(person._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Family;
