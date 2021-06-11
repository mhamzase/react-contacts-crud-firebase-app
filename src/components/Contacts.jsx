import React, { useState, useEffect } from "react";
import { Table, Jumbotron, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import firebaseDB from "../util/firebase";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function Contacts() {
  const [contacts, setContacts] = useState({});
  const [currentId, setCurrentId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContacts({
          ...snapshot.val(),
        });
        setLoading(false);
      } else {
        setContacts({});
        setLoading(false);
      }
    });
  }, []);

  const addOrEdit = (data) => {
    if (currentId == "") {
      firebaseDB.child("contacts").push(data, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    } else {
      firebaseDB.child(`contacts/${currentId}`).set(data, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  const removeContact = (currentId) => {
    if (window.confirm("Are you sure to delete this contact?")) {
      firebaseDB.child(`contacts/${currentId}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <Jumbotron>
          <h1 className="display-4 text-center">
            Contacts CRUD React Apllication with Firebase!
          </h1>
        </Jumbotron>
        <div className="row">
          <div className="col-5">
            <ContactForm {...{ addOrEdit, currentId, contacts }} />
          </div>
          <div className="col-7">
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5">Records are loading...</td>
                  </tr>
                ) : Object.keys(contacts).length == 0 ? (
                  <tr>
                    <td colSpan="5">No Contact's Found</td>
                  </tr>
                ) : (
                  Object.keys(contacts).map((contactId) => {
                    return (
                      <tr key={contactId}>
                        <td>{contacts[contactId].fullname}</td>
                        <td>{contacts[contactId].email}</td>
                        <td>{contacts[contactId].phone}</td>
                        <td>{contacts[contactId].city}</td>
                        <td>
                          <FaEdit
                            onClick={() => {
                              setCurrentId(contactId);
                            }}
                            style={{ cursor: "pointer" }}
                            className="text-primary"
                          />{" "}
                          <FaTrashAlt
                            onClick={() => removeContact(contactId)}
                            style={{ cursor: "pointer" }}
                            className="text-danger"
                          />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
