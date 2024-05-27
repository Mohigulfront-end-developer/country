import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Mode = ({ isDarkMode, handleToggle }) => {
  return (
    <div className="">
      <label className="flex items-center cursor-pointer">
        <div
          className={`relative inline-block w-14 h-8 transition duration-200 ease-linear ${
            isDarkMode ? "bg-gray-600" : "bg-gray-300"
          } rounded-full`}
        >
          <input
            type="checkbox"
            className="absolute opacity-0 w-full h-full cursor-pointer"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <span
            className={`absolute left-0  top-0 h-8 w-8 bg-white text-center border-2 rounded-full transform transition-transform duration-200 ease-linear ${
              isDarkMode ? "translate-x-6" : ""
            }`}
          >
            {isDarkMode ? (
              <CiDark className="h-8 w-6 text-gray-800" />
            ) : (
              <CiLight className="h-8 w-6 text-gray-800" />
            )}
          </span>
        </div>
      </label>
    </div>
  );
};

export default Mode;
