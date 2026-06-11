import React from "react";

export default function Selection({
  id,
  value,
  onChange,
  dropdown,
  filterObj,
}) {
  return (
    <select id={id} value={value} onChange={onChange}>
      <option value="">{dropdown}</option>
      {filterObj.map((val, ind) => {
        return (
          <option key={ind} value={val}>
            {val}
          </option>
        );
      })}
    </select>
  );
}
