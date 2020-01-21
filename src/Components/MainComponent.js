import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import TexadaModal from "./TexadaModal";
import matchSorter from "match-sorter";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Alert.css";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      description: "",
      datetime: "",
      longitude: "",
      latitude: "",
      elevation: "",
      filter: "",
      formdata: []
    };
  }

  componentDidMount() {
    this.setState({
      formdata: [
        {
          id: 1,
          description: "Cesna 120",
          datetime: "2016-10-12T12:00:00-05:00",
          longitude: "43.2583264",
          latitude: "-81.8149807",
          elevation: "500"
        },
        {
          id: 1,
          description: "Cesna 120",
          datetime: "2016-10-13T12:00:00-05:00",
          longitude: "42.559112",
          latitude: "-79.286693",
          elevation: "550"
        },
        {
          id: 1,
          description: "Cesna 120",
          datetime: "2016-10-14T12:00:00-05:00",
          longitude: "43.559112",
          latitude: "-85.286693",
          elevation: "600"
        },
        {
          id: 1,
          description: "Cesna 120",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "42.3119735",
          latitude: "-83.0941179",
          elevation: "650"
        },
        {
          id: 2,
          description: "DC-6 Twin Otter",
          datetime: "2016-10-12T12:00:00-05:00",
          longitude: "43.459112",
          latitude: "-80.386693",
          elevation: "500"
        },
        {
          id: 2,
          description: "DC-6 Twin Otter",
          datetime: "2016-10-13T12:00:00-05:00",
          longitude: "42.459112",
          latitude: "-79.386693",
          elevation: "550"
        },
        {
          id: 2,
          description: "DC-6 Twin Otter",
          datetime: "2016-10-14T12:00:00-05:00",
          longitude: "43.459112",
          latitude: "-85.386693",
          elevation: "450"
        },
        {
          id: 2,
          description: "DC-6 Twin Otter",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "44.459112",
          latitude: "-81.386693",
          elevation: "400"
        },
        {
          id: 3,
          description: "Piper M600",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "44.459112",
          latitude: "-81.386693",
          elevation: "500"
        },
        {
          id: 3,
          description: "Piper M600",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "45.459112",
          latitude: "-82.386693",
          elevation: "600"
        },
        {
          id: 3,
          description: "Piper M600",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "46.459112",
          latitude: "-83.386693",
          elevation: "700"
        },
        {
          id: 3,
          description: "Piper M600",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "47.459112",
          latitude: "-84.386693",
          elevation: "800"
        },
        {
          id: 3,
          description: "Piper M600",
          datetime: "2016-10-15T12:00:00-05:00",
          longitude: "48.459112",
          latitude: "-85.386693",
          elevation: "900"
        },
        {
          id: 4,
          description: "Art Boom 6500",
          datetime: "2017-08-04T14:20:38-05:00",
          longitude: "43.7634618",
          latitude: "-79.3688191",
          elevation: "800"
        },
        {
          id: 4,
          description: "Art Boom 6500",
          datetime: "2017-08-04T16:20:38-05:00",
          longitude: "43.8001468",
          latitude: "-79.2342365",
          elevation: "400"
        },
        {
          id: 4,
          description: "Art Boom 6500",
          datetime: "2017-08-04T14:20:38-05:00",
          longitude: "44.51165",
          latitude: "-80.1239422",
          elevation: "550"
        },
        {
          id: 4,
          description: "Art Boom 6500",
          datetime: "2017-08-04T14:20:38-05:00",
          longitude: "43.1501439",
          latitude: "-79.0504945",
          elevation: "300"
        }
      ]
    });
  }
  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleChangeDateTime = e => {
    this.setState({
      datetime: e.target.value
    });
  };

  handleChangeLongitude = e => {
    this.setState({
      longitude: e.target.value
    });
  };
  handleChangeLatitude = e => {
    this.setState({
      latitude: e.target.value
    });
  };
  handleChangeElevation = e => {
    this.setState({
      elevation: e.target.value
    });
  };

  handleClose = (e, errors) => {
    this.setState({
      show: false
    });
    toast("You didn't add any new entries...");
  };

  handleShowForActualModal() {
    this.setState({
      show: true
    });
  }

  submitEntry = (isValidating, isSubmitting, isValid, values, errors) => {
    console.log(
      "setSubmitting is",
      isSubmitting,
      "isValid is",
      isValid,
      "Erros are",
      errors,
      "values are",
      values
    );

    if (isValid && values.description !== "") {
      //This needs to be handled in a better way
      console.log("Form Submitting");
      this.state.show = false;
      this.setState({
        formdata: [
          ...this.state.formdata,
          {
            description: values.description,
            datetime: values.datetime,
            longitude: values.longitude,
            latitude: values.latitude,
            elevation: values.elevation
          }
        ]
      });
      toast.success("You have successfullt added a new entry...");
      values.description = "";
      values.datetime = "";
      values.longitude = "";
      values.latitude = "";
      values.elevation = "";

      errors.description = "";
      errors.datetime = "";
      errors.longitude = "";
      errors.latitude = "";
      errors.elevation = "";
    } else {
      console.log("Not submitting, form is invalid");
    }
  };
  searchingFor = term => {
    return function(x, index) {
      return x.description
        .toLowerCase()
        .includes(term[index].description.toLowerCase());
    };
  };

  render() {
    const { formdata } = this.state;
    return (
      <div className="container">
        {/* <button onClick={this.notify}>Notify !</button> */}
        <ToastContainer />
        <div className="row add-content-head">
          <div className="col-sm-10"></div>
          <div className="col-sm-2">
            <button
              className="btn btn-success"
              onClick={() => this.handleShowForActualModal()}
            >
              Add an Entry
            </button>
          </div>
        </div>

        <ReactTable
          data={formdata}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "Texada Sample Data",
              columns: [
                {
                  Header: "Description",
                  id: "description",
                  accessor: d => d.description,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["description"] }),
                  filterAll: true
                },

                {
                  Header: "Longitude",
                  id: "longitude",
                  accessor: d => d.longitude,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["longitude"] }),
                  filterAll: true
                },
                {
                  Header: "Latitude",
                  id: "latitude",
                  accessor: d => d.latitude,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["latitude"] }),
                  filterAll: true
                },
                {
                  Header: "Elevation",
                  id: "elevation",
                  accessor: d => d.elevation,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["elevation"] }),
                  filterAll: true
                },
                {
                  Header: "Date Time",
                  id: "datetime",
                  accessor: d => d.datetime,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["datetime"] }),
                  filterAll: true
                },
                {
                  Header: "Delete?",
                  Cell: row => (
                    <div
                      style={{ textAlign: "center" }}
                      className="btn btn-danger"
                      onClick={() => {
                        confirmAlert({
                          customUI: ({ onClose }) => {
                            return (
                              <div className="custom-ui">
                                <h1>Are you sure?</h1>
                                <p>You want to delete this entry?</p>
                                <button onClick={onClose}>No</button>
                                <button
                                  onClick={() => {
                                    let data = this.state.formdata;
                                    data.splice(row.index, 1);
                                    this.setState({ data });
                                    onClose();
                                    toast.info("So you deleted an entry...");
                                  }}
                                >
                                  Yes, Delete it!
                                </button>
                              </div>
                            );
                          }
                        });
                      }}
                    >
                      Remove
                    </div>
                  ),
                  filterAll: false
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <TexadaModal
          show={this.state.show}
          props={this.state}
          handleChangeDescription={this.handleChangeDescription}
          handleChangeDateTime={this.handleChangeDateTime}
          handleChangeLongitude={this.handleChangeLongitude}
          handleChangeLatitude={this.handleChangeLatitude}
          handleChangeElevation={this.handleChangeElevation}
          submitEntry={this.submitEntry}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default MainComponent;
