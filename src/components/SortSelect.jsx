import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext";

const SortSelect = () => {
  const { sortField, setSortField } = useContext(CompanyContext);

  return (
    <select
      value={sortField}
      onChange={(e) => setSortField(e.target.value)}
      className="border text-xs sm:text-lg border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none"
    >
      <option value="name">Sort by Name</option>
      <option value="employees">Sort by Employees</option>
        <option value="location">Sort by Location</option>
        <option value="industry">Sort by Industry</option>

    </select>
  );
};

export default SortSelect;
