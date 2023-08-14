import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";

function Table() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      var res = await Axios.get("http://localhost:8000/api/tournament");
      console.log(res.data);
      setList(res.data);
    };

    fetch();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/tournament/${id}`);
  };

  return (
    <div className="container">
      <h1>List of Tournament</h1>

      <Link to={"/create"}>
        <button type="button" className="btn btn-primary">
          + Create
        </button>
      </Link>
      <div className="table table-hover">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              <th scope="col">Teams List</th>
            </tr>
          </thead>
          <tbody>
            {list.map((val, idx) => {
              return (
                <tr key={val._id}>
                  <th scope="row">{idx + 1}</th>
                  <th scope="row">{val.name}</th>
                  <td>{val.startDate}</td>
                  <td>{val.endDate}</td>
                  <td>{val.Status}</td>
                  <td>
                    <Link to={`/view/${val._id}`}>
                      <button type="button" className="btn btn-success">
                        View
                      </button>
                    </Link>
                    <Link to={`/edit/${val._id}`}>
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
                  <td> <Link to={`/teams/${val._id}`}>
                      <button type="button" className="btn btn-warning">
                        Teams
                      </button>
                    </Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
