import React from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, FormText, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class RequestInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button className="request" color="danger" onClick={this.toggle}>{this.props.buttonLabel} Request More Info </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>GA Information Request for Credentials</ModalHeader>
          <ModalBody> Fill out your contact information below to get in touch about General Assembly's Credentials program.
          </ModalBody>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Full Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="yourname@email.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Phone</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="123 456 7890" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Study Topic</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Software Engineering</option>
            <option> Data Science</option>
            <option>Front-End Development</option>
            <option>Back-End Development</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">What can we help your with? </Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload your Resume</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Feel free to upload your resume so we can 
            give you tips on how to get more interviews.
          </FormText>
        </FormGroup>
      </Form>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RequestInfo;