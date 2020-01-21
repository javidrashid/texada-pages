import React, { Component } from "react";
import { Modal, Button, Form as BForm, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TexadaEntriesSchema = Yup.object().shape({
  description: Yup.string()
    .required("Description is needed")
    .min(10, "please provide more than 5 characters")
    .max(50, "Can't be more than 50 characters"),
  datetime: Yup.string()
    .default(() => new Date())
    .required("Date is needed")
    .typeError("That doesn't look like a proper date time"),
  longitude: Yup.number()
    .required("Longitude is needed")
    .typeError("That doesn't look like a number"),
  latitude: Yup.number()
    .required("Latitude is needed")
    .typeError("That doesn't look like a number"),
  elevation: Yup.number()
    .required("Elevation is needed")
    .min(2, "Minimum of 2 is needed")
    .typeError("Elevation has to be a number")
});

class TexadaModal extends Component {
  handleSubmit = () => {
    console.log("handling submit");
  };
  render(props) {
    return (
      <Formik
        initialValues={{
          description: "",
          datetime: "",
          longitude: "",
          latitude: "",
          elevation: ""
        }}
        validationSchema={TexadaEntriesSchema}
      >
        {({
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValidating,
          isSubmitting,
          isValid,
          values,
          errors
        }) => (
          <div>
            {/* <Debug /> */}
            <Modal show={this.props.show} onHide={this.props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Item</Modal.Title>
              </Modal.Header>
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <BForm.Row>
                    <BForm.Group as={Col} md="6">
                      <BForm.Label>Description</BForm.Label>
                      <Field
                        value={this.props.description}
                        onChange={
                          (e => this.props.handleChangeDescription(e),
                          handleChange)
                        }
                        onBlur={handleBlur}
                        className="form-control"
                        id="description"
                        placeholder="Description"
                        name="description"
                        className={`form-control ${
                          touched.description && errors.description
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="description"
                        className="invalid-feedback"
                      />
                    </BForm.Group>
                    <BForm.Group as={Col} md="6">
                      <BForm.Label htmlFor="datetime">Date Time</BForm.Label>
                      <input
                        type="datetime-local"
                        value={this.props.datetime}
                        onChange={
                          (e => this.props.handleChangeDateTime(e),
                          handleChange)
                        }
                        placeholder="Date and Time"
                        onBlur={handleBlur}
                        id="datetime"
                        name="datetime"
                        className={`form-control ${
                          touched.datetime && errors.datetime
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="datetime"
                        className="invalid-feedback"
                      />
                    </BForm.Group>
                  </BForm.Row>
                  <BForm.Row>
                    <BForm.Group as={Col} md="6">
                      <BForm.Label htmlFor="longitude">Longitude </BForm.Label>
                      <Field
                        type="text"
                        name="longitude"
                        id="longitude"
                        placeholder="Longitude"
                        value={this.props.longitude}
                        onChange={
                          (e => this.props.handleChangeLongitude(e),
                          handleChange)
                        }
                        onBlur={handleBlur}
                        className={`form-control ${
                          touched.longitude && errors.longitude
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="longitude"
                        className="invalid-feedback"
                      />
                    </BForm.Group>
                    <BForm.Group as={Col} md="6">
                      <BForm.Label htmlFor="latitude">Latitude</BForm.Label>
                      <BForm.Control
                        //type="text"
                        id="latitude"
                        placeholder="Latitude"
                        value={this.props.latitude}
                        name="latitude"
                        onChange={
                          (e => this.props.handleChangeLatitude(e),
                          handleChange)
                        }
                        onBlur={handleBlur}
                        className={`form-control ${
                          touched.latitude && errors.latitude
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="latitude"
                        className="invalid-feedback"
                      />
                    </BForm.Group>
                  </BForm.Row>
                  <BForm.Row>
                    {/* <BForm.Group as={Col} md="6"></BForm.Group> */}
                    <BForm.Group as={Col} md="12">
                      <label htmlFor="elevation">Elevation</label>
                      <input
                        type="text"
                        name="elevation"
                        value={this.props.elevation}
                        onChange={
                          (e => this.props.handleChangeElevation(e),
                          handleChange)
                        }
                        onBlur={handleBlur}
                        id="elevation"
                        className={`form-control ${
                          touched.elevation && errors.elevation
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="elevation"
                        className="invalid-feedback"
                      />
                    </BForm.Group>
                  </BForm.Row>
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={e => this.props.handleClose()}
                  >
                    Close
                  </Button>
                  <ToastContainer />
                  <button
                    className="btn btn-primary"
                    // disabled={!isValid}
                    onClick={e =>
                      this.props.submitEntry(
                        isValidating,
                        isSubmitting,
                        isValid,
                        values,
                        errors
                      )
                    }
                  >
                    Add Entry
                    {/* {isSubmitting ? "Please wait..." : "Submit"} */}
                  </button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        )}
      </Formik>
    );
  }
}

export default TexadaModal;
