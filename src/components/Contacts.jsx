import React, { useState, useEffect } from "react";
import { Table, Jumbotron, Button } from "react-bootstrap";
import ContactForm from "./ContactForm";
import firebaseDB from "../util/firebase";
import { FaEdit,FaTrashAlt  } from "react-icons/fa";


function Contacts() {
  const [contacts, setContacts] = useState({});
  const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        firebaseDB.child("contacts").on("value",snapshot=>{
            if(snapshot.val() != null){
                setContacts({
                    ...snapshot.val()
                })
            }
        })
    }, [])

  const addOrEdit = (data) => {
    if(currentId == ''){
      firebaseDB.child("contacts").push(data, (err) => {
        if (err) {
          console.log(err);
        }else{
          setCurrentId('')
        }
      });
    }else{
      firebaseDB.child(`contacts/${currentId}`).set(data, (err) => {
        if (err) {
          console.log(err);
        }else{
          setCurrentId('')
        }
      });
    }
  };


  const removeContact = (id) =>{
      
  }
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
            <ContactForm {...({addOrEdit,currentId,contacts})} />
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
                    Object.keys(contacts).map(contactId =>{
                        return <tr key={contactId}>
                            <td>{contacts[contactId].fullname}</td>
                            <td>{contacts[contactId].email}</td>
                            <td>{contacts[contactId].phone}</td>
                            <td>{contacts[contactId].city}</td>
                            <td>
                                <FaEdit onClick={()=>{setCurrentId(contactId)}} style={{cursor:'pointer'}} className="text-primary"/>{' '}
                                <FaTrashAlt onClick={()=>removeContact(contactId)}  style={{cursor:'pointer'}} className="text-danger"/>
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
