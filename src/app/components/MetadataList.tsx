import React from "react";

type Props = {
  uris: string[];
};

const MetadataList: React.FC<Props> = ({ uris }) => {
  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 py-6 bg-gray-900 rounded-lg shadow-lg mt-6 overflow-hidden animate-fadeIn">
      <h2 className="text-lg font-semibold text-center mb-4">Metadata History</h2>
      <ul className="space-y-4">
        {uris.map((uri, index) => {
          // Extract the hash from the URL (e.g., bafybeifpu5ajhx7...)
          const hash = uri.split("/")[4];
          return (
            <li
              key={index}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex justify-between items-center overflow-hidden"
            >
              <span className="truncate max-w-[85%]">{hash}</span>
              <a
                href={uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm sm:text-base ml-2"
              >
                View
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MetadataList;
