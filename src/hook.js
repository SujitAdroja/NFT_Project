import { useNavigate } from "react-router-dom";

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
  //sell nft function
  const sellNFT = (nftID) => {
    console.log(nftID);
    const oldData = JSON.parse(localStorage.getItem("user"));
    const nfts = oldData.nfts;
    const newNFTs = nfts.filter((nft) => +nft.nft_id !== +nftID);
    const newData = { ...oldData, nfts: newNFTs };
    localStorage.setItem("user", JSON.stringify(newData));
  };
  return {
    ConnectToWallet,
    fetchData,
    buyNFT,
    sellNFT,
  };
};
export default useApp;
