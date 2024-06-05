import { useNavigate } from "react-router-dom";

//commented code is for the local storage purpose create first
// now it is connnected with the data base so no worries
const useApp = () => {
  const date = new Date();
  const navigate = useNavigate();

  //   connect to the wallet
  const ConnectToWallet = () => {
    const oldData = JSON.parse(localStorage.getItem("user"));
    const newData = { ...oldData, accountStatus: true };

    localStorage.setItem("user", JSON.stringify(newData));
    navigate("/");
  };

  //fetch data from local storage

  const fetchData = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    return data;
  };

  //buy the nft
  const buyNFT = (collection_id, nftID) => {
    const oldData = JSON.parse(localStorage.getItem("user"));
    const { data } = oldData;
    const collection = data.filter((col) => col.id === +collection_id)[0];
    console.log(collection);
    const newNFT = collection.nfts.filter((nft) => nft.nft_id === nftID)[0];
    const newData = { ...oldData, nfts: [newNFT, ...oldData.nfts] };
    localStorage.setItem("user", JSON.stringify(newData));
  };

  return {
    ConnectToWallet,
    fetchData,
    buyNFT,
  };
};
export default useApp;
