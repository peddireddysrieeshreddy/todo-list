import React, { useState } from "react";
import RenderList from "../RenderList";
import { v1 as uuidv4 } from "uuid";
import "./List.css";

export const List = () => {
  const [state, setstate] = useState({ work: "", priority: "", id: "" });
  const [list, setList] = useState([]);
  const listADD = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value, id: uuidv4() });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (state.work && state.priority) {
      setList([...list, state]);
      console.log(list);
    }
    console.log(list);
    setstate({ work: "", priority: "", id: "" });
  };

  return (
    <>
      <div className="division">
        <form>
          <input
            type="text"
            name="work"
            value={state.work}
            className="input"
            placeholder="ADD WORK ......."
            onChange={listADD}
          />
          <input
            type="text"
            name="priority"
            value={state.priority}
            className="input"
            placeholder="ADD PRIORITY  .........."
            onChange={listADD}
          />
          <button onClick={onFormSubmit} className="button">
            SUBMIT
          </button>
        </form>

        <p1></p1>
      </div>
      <RenderList list={list} setList={setList} />
    </>
  );
};
