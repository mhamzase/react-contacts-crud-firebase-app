import "./App.css";
import ContactForm from "./components/ContactForm";
import { Table,Jumbotron,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid mt-3">
        <Jumbotron>
          <h1 className="display-4 text-center">Contacts CRUD React Apllication with Firebase!</h1>
        </Jumbotron>
        <div className="row">
          <div className="col-5">
            <ContactForm />
          </div>
          <div className="col-7">
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
