import { ElectrumClient } from "electrum-cash";
// TODO: change it
export const electrumChipnet = new ElectrumClient(
  "mainnet-js-node",
  "1.5",
  "chipnet.imaginary.cash",
  50004,
  "wss"
);

export type network = "mainnet" | "chipnet";
const electrumClient = (network: network) => {
  if (network === "mainnet") {
    // TODO: change to mainnet
    return electrumChipnet;
  } else {
    return electrumChipnet;
  }
};

export type balance = { confirmed: number; unconfirmed: number };
export const getBalance = (address: string, network: network = "chipnet") =>
  electrumClient(network).request("blockchain.address.get_balance", address);

export type history = {
  height: number;
  tx_hash: string;
}[];
export const getHistory = (address: string, network: network = "chipnet") =>
  electrumClient(network).request<history>(
    "blockchain.address.get_history",
    address
  );
