import React, { useState } from "react";
import { useFungsiDispatch } from "../../Context/StorageContext";

export const Add = () => {
  const [ValueAdd, setValueAdd] = useState("");
  const dispatch = useFungsiDispatch();
  let nextId = 3;

  return (
    <div>
      <input
        onChange={(e) => {
          setValueAdd(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          // menjalankan fungsi alat melalui teller
          dispatch({
            type: "salto",
            id: nextId++,
            text: ValueAdd,
          });

          setValueAdd("");
        }}
      >
        add{" "}
      </button>
    </div>
  );
};
