/* eslint-disable @typescript-eslint/no-explicit-any */

export const parseError = (error: any) => {
  if (error?.response?.data?.error?.includes("URI query for nonexistent token")) {
    return "The given NFT metadata has not been minted.";
  }
  return "An unexpected error occurred.";
};
