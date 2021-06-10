import React from "react";
import {Form,Col,Button,FormControl,InputGroup} from 'react-bootstrap'
function ContactForm() {
  return (
    <>
          <Form>
        <Form.Row className="align-items-center">
          <Col xs="lg">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Fullname*</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup"  />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Phone*</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup"  />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Email*</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup" />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Address*</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroup"  />
            </InputGroup>
            <Button type="submit" className="mb-2 col-12">
              Save
            </Button>
          </Col>      
        </Form.Row>
      </Form>
    </>
  );
}

export default ContactForm;
