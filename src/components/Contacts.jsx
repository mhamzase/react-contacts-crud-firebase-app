import React, { useState, useEffect } from "react";
import { Table, Jumbotron, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import firebaseDB from "../util/firebase";
import { FaEdit,FaTrashAlt  } from "react-icons/fa";


function Contacts() {
  const [contacts, setContacts] = useState({});

    useEffect(() => {
        firebaseDB.child("contacts").on("value",snapshot=>{
            if(snapshot.val() != null){
                setContacts({
                    ...snapshot.val()
                })
            }
        })
    }, [])

  const AddorEdit = (data) => {
    firebaseDB.child("contacts").push(data, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

  return (
    <>
      <div className="container-fluid mt-3">
          {console.log(contacts)}
        <Jumbotron>
          <h1 className="display-4 text-center">
            Contacts CRUD React Apllication with Firebase!
          </h1>
        </Jumbotron>
        <div className="row">
          <div className="col-5">
            <ContactForm AddorEdit={AddorEdit} />
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
                {
                    Object.keys(contacts).map(id =>{
                        return <tr key={id}>
                            <td>{contacts[id].fullname}</td>
                            <td>{contacts[id].phone}</td>
                            <td>{contacts[id].email}</td>
                            <td>{contacts[id].city}</td>
                            <td>
                                <FaEdit style={{cursor:'pointer'}} className="text-primary"/>{' '}
                                <FaTrashAlt  style={{cursor:'pointer'}} className="text-danger"/>
                            </td>
                        </tr>
                    })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
