import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Edit from "../src/Edit";

const RenderList = ({ list, setList }) => {
  const [state, setState] = useState(false);
  const [temp, setTemp] = useState("");
  useEffect(() => {
    console.log("rendering");
  }, [temp]);

  const editModel = (id) => {
    setState(true);
    if (id) {
      setTemp(id);
    }
    console.log(id);
    console.log(temp);
    console.log(list);
  };

  const deleteFunction = (work) => {
    const updatedList = list.filter((list) => list.id !== work);
    setList(updatedList);
  };
  return (
    <div>
      {state && (
        <Edit
          temp={temp}
          list={list}
          setList={setList}
          setState={setState}
          state={state}
        />
      )}

      {list.map((list) => {
        return (
          <div key={list.id}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">WORK</th>
                  <th scope="col">PRIORITY</th>
                  <th scope="col">EDIT</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{list.work}</td>
                  <td>{list.priority}</td>
                  <td>
                    {
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => editModel(list.id)}
                      >
                        EDIT
                      </button>
                    }
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteFunction(list.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default RenderList;
