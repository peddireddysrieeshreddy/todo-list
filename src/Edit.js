import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Update from "../src/Update";

const Edit = ({ temp, list, setList, setState, state }) => {
  const [toggle, settoggle] = useState(false);
  const [variable, setVariable] = useState("");
  const [update, setUpdate] = useState({ one: "", two: "" });
  useEffect(() => {
    {
      list.map((list) => {
        if (list.id) {
          setUpdate({ ...update, one: list.work, two: list.priority });
          console.log(update);
        }
      });
    }
  }, [state]);
  const editChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
    console.log(update);
  };
  const updateForm = (loopId) => {
    console.log(loopId);
    console.log(update.one);
    console.log(update.two);
    {
      list.map((list) => {
        if (list.id === loopId) {
          const dum = {
            id: list.id,
            work: update.one,
            priority: update.two,
          };
          // setList([...list, { dum }]);
          setVariable(dum);

          console.log(dum);
        }
      });
    }
  };
  return (
    <div className="container">
      {variable && <Update data={variable} list={list} setList={setList} />}
      {list
        .filter((list) => list.id === temp)
        .map((list) => {
          return (
            <div className="holder">
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
      {/* <input />
      <input name="priority" />
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-warning">
        Close
      </button> */}
    </div>
  );
};

export default Edit;
// import React, { useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const Edit = ({ id, list, setList, setState, state }) => {
//   const [update, setUpdate] = useState({ work: "" });
//   const [holder, setHolder] = useState(null);
//   const editChange = (e) => {
//     setUpdate({ ...update, [e.target.name]: e.target.value });
//     console.log(update);
//   };
//   const updateForm = (loopId) => {
//     console.log(loopId);
//     if (id === loopId) {
//       console.log("hope");
//     }
//   };

//   return (
//     <div>
//       {list.map((list, index) => {
//         return (
//           <div key={list.id}>
//             <input
//               name={update.work}
//               // value={list.work}
//               defaultValue={list.work}
//               onChange={editChange}
//             />
//             <input
//               name="priority"
//               // value={list.priority}
//               defaultValue={list.priority}
//               onChange={editChange}
//             />
//             <button
//               type="button"
//               class="btn btn-success"
//               onClick={() => updateForm(list.id)}
//             >
//               Success
//             </button>
//             <button
//               type="button"
//               class="btn btn-warning"
//               onClick={() => {
//                 setState(!state);
//               }}
//             >
//               Close
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Edit;
