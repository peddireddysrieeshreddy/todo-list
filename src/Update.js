import React, { useEffect } from "react";

const Update = ({ data, list, setList }) => {
  useEffect(() => {
    console.log(data);
    {
      list.map((list) => {
        if (list.id == data.id) {
          console.log("hope");
          //   setList([...list, { data }]);
        }
      });
    }
    // setList([...list, { data }]);
  }, []);
  console.log(data);
  return <div></div>;
};

export default Update;
