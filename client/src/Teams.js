import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";

function Teams() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      var res = await Axios.get("http://localhost:8000/api/team");
      console.log(res.data);
      setList(res.data);
    };

    fetch();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/team/${id}`);
  };
  return (
    <div className="container">
      <h1>List of Teams</h1>

      <Link to={"create"}>
        <button type="button" className="btn btn-primary">
          + Create
        </button>
      </Link>
      <div className="table table-hover">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Teams</th>
              <th scope="col">Win</th>
              <th scope="col">Lose</th>
              <th scope="col">Points</th>
              <th scope="col">Total Match</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((val, idx) => {
              return (
                <tr key={val._id}>
                  <th scope="row">{idx + 1}</th>
                  <th scope="row">{val.team}</th>
                  <td>{val.win}</td>
                  <td>{val.lose}</td>
                  <td>{val.point}</td>
                  <td>{val.totalmatch}</td>
                  <td>
                    <Link to={`view/${val._id}`}>
                      <button type="button" className="btn btn-success">
                        View
                      </button>
                    </Link>
                    <Link to={`edit/${val._id}`}>
                      <button type="button" className="btn btn-warning">
                        Edit
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(val._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to={'/'}>
     
          <button type="button" className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Teams;
