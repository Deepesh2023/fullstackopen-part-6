import { useState } from "react";
import { useDispatch } from "react-redux";

import { textFilter } from "../reducers/filterReducer";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const filterOnChange = (event) => {
    dispatch(textFilter(event.target.value));
    setFilter(event.target.value);
  };

  return (
    <>
      <label htmlFor="">Filter: </label>
      <input type="text" value={filter} onChange={filterOnChange} />
    </>
  );
};

export default Filter;
