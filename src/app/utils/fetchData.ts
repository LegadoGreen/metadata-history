import axios from "axios";

export const fetchData = async (tokenId: number) => {
  const response = await axios.post("https://f48l3fwh28.execute-api.us-east-1.amazonaws.com/getMetadataHistory", {
    tokenId,
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  });

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
};
