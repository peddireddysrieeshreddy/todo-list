import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Edit from "../src/Edit";

const RenderList = ({ list, setList }) => {

  const [state, setState] = useState(false);
  const [temp, setTemp] = useState("");

  const editModel = (id) => {
    setState(true);
    if (id) {
      setTemp(id);
    }
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

      <table className="table">
        <thead>
          <tr>
            <th scope="col">WORK</th>
            <th scope="col">PRIORITY</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
        {list.map((element) => {
          return (
            <tr  key={element.id}>
              <td>{element.work}</td>
              <td>{element.priority}</td>
              <td>
                {
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => editModel(element.id)}
                  >
                    EDIT
                  </button>
                }
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteFunction(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderList;
