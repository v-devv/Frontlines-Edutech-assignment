import React, { createContext, useState, useEffect } from "react";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredData = companies.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredData);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(timeout);
  }, [search, companies]);

  const sortedData = filtered.sort((a, b) => {
    if (sortField === "name") return a.name.localeCompare(b.name);
    if (sortField === "employees") return a.employees - b.employees;
    if (sortField === "location") return a.location.localeCompare(b.location);
    if (sortField === "industry") return a.industry.localeCompare(b.industry);

    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentData = sortedData.slice(start, start + itemsPerPage);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        filtered,
        currentData,
        search,
        setSearch,
        sortField,
        setSortField,
        currentPage,
        setCurrentPage,
        totalPages,
        loading,
        error,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
