import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";

function Viewteam() {
  const params = useParams();

  const initial = { team: "", win: "", lose: "", point: "", totalmatch: "" };

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
      let res = await axios.get(`http://localhost:8000/api/team/${params.id}`);
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
                <label>Team Name</label>
                <input
                  type={"text"}
                  name="team"
                  onChange={formik.handleChange}
                  value={formik.values.team}
                  className="form-control"
                ></input>
              </div>
              <div className="col-lg-12">
                <label>Win</label>
                <input
                  type={"text"}
                  name="win"
                  onChange={formik.handleChange}
                  value={formik.values.win}
                  className="form-control"
                ></input>
              </div>

              <div className="col-lg-12">
                <label>Lose</label>
                <input
                  type={"text"}
                  name="lose"
                  onChange={formik.handleChange}
                  value={formik.values.lose}
                  className="form-control"
                ></input>
              </div>
              <div className="col-lg-12">
                <label>Point</label>
                <input
                  type={"text"}
                  name="point"
                  onChange={formik.handleChange}
                  value={formik.values.point}
                  className="form-control"
                ></input>
              </div>
              <div className="col-lg-12">
                <label>Total Match</label>
                <input
                  type={"text"}
                  name="totalmatch"
                  onChange={formik.handleChange}
                  value={formik.values.totalmatch}
                  className="form-control"
                ></input>
              </div>

              <div className="col-lg-12 " style={{ margin: "5px" }}>
                <Link to={`/teams/${params.id}`}>
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

export default Viewteam;
