"use client";
import { useState } from "react";
import InputBar from "./components/InputBar";
import MetadataList from "./components/MetadataList";
import { fetchData } from "./utils/fetchData";
import { parseError } from "./utils/parseError";
import Footer from "./components/Footer";

const Home = () => {
  const [metadataHistory, setMetadataHistory] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (tokenId: number) => {
    setError(null);
    setMetadataHistory(null); // Clear previous results
    setIsLoading(true);
    try {
      const data = await fetchData(tokenId);
      setMetadataHistory(data.uriHistory);
    } catch (err) {
      if (err instanceof Error) {
        const message = parseError(err);
        setError(message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className={`w-full transition-all duration-500 ${metadataHistory ? "mt-12" : "mt-0"}`}>
        <InputBar onSearch={handleSearch} isLoading={isLoading} />
      </div>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {metadataHistory && <MetadataList uris={metadataHistory} />}
      <Footer />
    </div>
  );
};

export default Home;
