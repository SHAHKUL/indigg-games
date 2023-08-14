import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
function View() {
  const param = useParams();

  const initial = {
    name: "",
    startDate: "",
    endDate: "",
    Status: "",
  };

  let formik = useFormik({
    initialValues: initial,
    validate: () => {},

    onSubmit: async (values) => {},
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/tournament/${param.id}`
      );
      console.log(res.data);

      formik.setValues(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forms">
      <h1>View League</h1>
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
                <Link to={"/"}>
                  <button className="btn btn-success">Back</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default View;
