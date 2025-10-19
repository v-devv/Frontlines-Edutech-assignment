import React, { useContext } from "react";
import InfoCard from "./components/InfoCard";
import Pagination from "./components/Pagination";
import { CompanyContext } from "./context/CompanyContext";
import SortSelect from "./components/SortSelect";

const App = () => {
  const { currentData, search, setSearch, loading } =
    useContext(CompanyContext);

  if (loading)
    return (
      <div className="text-center font-medium text-xl sm:text-3xl mt-10"> Loading Companies ...</div>
    );

  return (
    <div className="hide-scrollbar overflow-y-scroll h-screen bg-gray-50">
      <div className="w-full min-h-screen px-4 sm:px-8 md:px-12 py-8">
        <h1 className="sm:text-5xl text-2xl font-bold mb-6 text-center text-gray-800">
          Companies Directory
        </h1>

        <div className="flex flex-col  sm:flex-row sm:justify-between items-center mb-6 gap-4">
          <div className="flex items-center border pl-4  gap-2 border-gray-400/40 sm:h-[52px] h-[40px] rounded-full sm:max-w-md sm:w-full">
            <img src="/search.png" className="sm:w-6 w-4" alt="" />
            <input
              type="text"
              placeholder="Search company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full outline-none text-gray-600 pr-5 bg-transparent placeholder-gray-500 sm:text-sm text-[15px]"
            />
          </div>

          <SortSelect />
        </div>
        <div className="pb-6">
          <Pagination />
        </div>
        {currentData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {currentData.map((c, i) => (
              <InfoCard key={i} {...c} />
            ))}
          </div>
        ) : (
          <div className="text-center text-lg sm:text-3xl text-gray-500 py-20">
            No companies found.
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
