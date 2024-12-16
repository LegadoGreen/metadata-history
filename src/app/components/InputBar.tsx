import { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Search icon
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loading spinner

type Props = {
  onSearch: (tokenId: number) => void;
  isLoading: boolean;
};

const InputBar: React.FC<Props> = ({ onSearch, isLoading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    const tokenId = parseInt(inputValue);
    if (!isNaN(tokenId)) {
      onSearch(tokenId);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 animate-fadeIn">
      <input
        type="number"
        placeholder="Enter Token ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-64 px-4 py-2 text-black rounded-md focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleClick}
        className={`flex items-center justify-center px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 ${
          isLoading ? "cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin" size={20} />
        ) : (
          <FiSearch size={20} />
        )}
        <span className="ml-2">Search</span>
      </button>
    </div>
  );
};

export default InputBar;
