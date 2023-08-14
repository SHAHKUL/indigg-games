import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import "../App.css";

function Create() {
  const navigate = useNavigate();

  const initial = {
    name: "",
    startDate: "",
    endDate: "",
    Status: "",
  };

  let formik = useFormik({
    initialValues: initial,
    validate: () => {},

    onSubmit: async (values) => {
      await axios.post("http://localhost:8000/api/tournament/", values);
      navigate("/");
    },
  });

  return (
    <div className="forms">
      <h1>Create League</h1>
      <div>
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <label>Tournament Name</label>
                <input
                  type={"text"}
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="form-control"
                ></input>
              </div>
              <div className="col-lg-12">
                <label>Starting Date</label>
                <input
                  type={"text"}
                  name="startDate"
                  onChange={formik.handleChange}
                  value={formik.values.startDate}
                  className="form-control"
                ></input>
              </div>

              <div className="col-lg-12">
                <label>Ending Date</label>
                <input
                  type={"text"}
                  name="endDate"
                  onChange={formik.handleChange}
                  value={formik.values.endDate}
                  className="form-control"
                ></input>
              </div>
              <div className="col-lg-12">
                <label>Status</label>
                <input
                  type={"text"}
                  name="Status"
                  onChange={formik.handleChange}
                  value={formik.values.Status}
                  className="form-control"
                ></input>
              </div>

              <div className="col-lg-12 " style={{ margin: "5px" }}>
                <button type={"submit"} className="btn btn-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
