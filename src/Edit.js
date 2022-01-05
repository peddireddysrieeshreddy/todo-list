import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Update from "../src/Update";

const Edit = ({ temp, list, setList, setState, state }) => {
  // const [toggle, settoggle] = useState(false);
  // const [variable, setVariable] = useState("");
  const [update, setUpdate] = useState({ one: "", two: "" });

  useEffect(() => {
    list.map((list) => {
      if (list.id) {
        setUpdate({ ...update, one: list.work, two: list.priority });
      }
    });
  }, [state]);

  const editChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const updateForm = (loopId) => {

    console.log(list);

    let updatedList = [];
    list.map((element) => {
      let updatedObject = element;
      if (element.id === loopId) {
        updatedObject = {
          id: element.id,
          work: update.one,
          priority: update.two,
        };
        
      }
      updatedList.push(updatedObject);
    });
    setList(updatedList);
  };

  return (
    <div className="container">
      {/* {variable && <Update data={variable} list={list} setList={setList} />} */}
      {list
        .filter((list) => list.id === temp)
        .map((list) => {
          return (
            <div key={list.id} className="holder">
              <input
                name="one"
                defaultValue={list.work}
                onChange={editChange}
              />
              <input
                name="two"
                defaultValue={list.priority}
                onChange={editChange}
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={() => updateForm(list.id)}
              >
                Success
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  setState(!state);
                }}
              >
                Close
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Edit;
