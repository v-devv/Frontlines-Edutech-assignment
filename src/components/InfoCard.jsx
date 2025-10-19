import React from "react";

const InfoCard = ({
  name = "",
  industry = "",
  location = "",
  employees = "",
}) => {
  return (
    <div className="max-w-sm h-50 w-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-2">{industry}</p>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-700">
          <span className="font-medium text-red-600/50 flex items-center gap-2 justify-center">
            {" "}
            <img src="/location.png" className="w-4" alt="" /> {location}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 my-3"></div>

      <div className="bg-indigo-100 text-gray-600 text-xs sm:text-sm font-medium text-center px-6 py-3 rounded-full shadow-sm">
        {employees} Employees
      </div>
    </div>
  );
};

export default InfoCard;
