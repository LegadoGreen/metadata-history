import axios from "axios";

export const fetchData = async (tokenId: number) => {
  const response = await axios.post("http://localhost:3000/getMetadataHistory", {
    tokenId,
    privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  });

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
};
