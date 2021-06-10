import React, { useState, useEffect } from "react";
import { Form, Col, Button, FormControl, InputGroup } from "react-bootstrap";
import { FaUserAlt, FaCity, FaMobileAlt, FaEnvelope } from "react-icons/fa";

function ContactForm(props) {
  const initialValues = {
    fullname: "",
    phone: "",
    email: "",
    city: "",
  };

  const [data, setData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitFormdata = (e) => {
    e.preventDefault();
    props.AddorEdit(data);
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={submitFormdata}>
        <Form.Row className="align-items-center">
          <Col xs="lg">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaUserAlt />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="fullname*"
                name="fullname"
                value={data.fullname}
                onChange={(e) => handleInputChange(e)}
              />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="email*"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => handleInputChange(e)}
              />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaMobileAlt />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="phone*"
                name="phone"
                value={data.phone}
                onChange={(e) => handleInputChange(e)}
              />
            </InputGroup>

            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <FaCity />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="city*"
                name="city"
                value={data.city}
                onChange={(e) => handleInputChange(e)}
              />
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
