import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Transaction() {
  const [sendData, setSendData] = useState([]);
  const [receiveData, setReceiveData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [wallettobank, setWallettobank] = useState([]);

  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);
  const [showTable3, setShowTable3] = useState(false);
  const [showTable4, setShowTable4] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [sendRes, receiveRes, banksend, historyRes] = await Promise.all([
        axios.get(
          `http://localhost:8080/api/moneytransfer/send/${sessionStorage.getItem(
            "walletaccount"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        ),
        axios.get(
          `http://localhost:8080/api/moneytransfer/receive/${sessionStorage.getItem(
            "walletaccount"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        ),

        axios.get(
          `http://localhost:8080/api/wallettobanktransfer/details/${sessionStorage.getItem(
            "walletaccount"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        ),
        axios.get(
          `http://localhost:8080/api/money/addmoney/history/${sessionStorage.getItem(
            "walletaccount"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        ),
      ]);
      setSendData(sendRes.data);
      setReceiveData(receiveRes.data);
      setWallettobank(banksend.data);
      setHistoryData(historyRes.data);
    };
    fetchData();
  }, []);

  const sortData = (data) => {
    return data.sort(
      (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
    );
  };

  return (
    <div>
      <div class="dropdown ">
        <button
          class="btn btn-secondary dropdown-toggle col-12"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setShowTable1(!showTable1)}
        >
          Wallet To Wallet-MoneyTransfer-Transaction-Details
        </button>
        {showTable1 && (
        <table className="table table-striped thead-light ">
          <thead>
            <tr>
              <th>Transactionid</th>
              <th>Transaction-Date-Time</th>
              <th>Receiver-Account</th>
              <th>Amount</th>
              <th>Sender-Curreny-Type</th>
              <th>Receiver-Currency-Type</th>
            </tr>
          </thead>
          <tbody>
            {sortData(sendData).map((item) => (
              <tr key={item.transactionid}>
                <td>{item.transactionid}</td>
                <td>{item.transactiondatetime}</td>
                <td>{item.receiveraccount}</td>
                <td>{item.amount}</td>
                <td>{item.sendercurrency}</td>
                <td>{item.receivercurrency}</td>
              </tr>
            ))}
          </tbody>
        </table>)}
      </div>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle col-12"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setShowTable2(!showTable2)}
        >
          Wallet To Wallet-MoneyReceived-Transaction-Details
        </button>
        {showTable2 && (
        <table className="table table-striped thead-light">
          <thead>
            <tr>
              <th>Transactionid</th>
              <th>Transaction-Date-Time</th>
              <th>Sender-Account</th>
              <th>Amount</th>
              <th>Sender-Curreny-Type</th>
              <th>Receiver-Currency-Type</th>
            </tr>
          </thead>
          <tbody>
            {sortData(receiveData).map((item) => (
              <tr key={item.transactionid}>
                <td>{item.transactionid}</td>
                <td>{item.transactiondatetime}</td>
                <td>{item.senderaccount}</td>
                <td>{item.amount}</td>
                <td>{item.sendercurrency}</td>
                <td>{item.receivercurrency}</td>
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>)}
      </div>

      <div class="dropdown ">
        <button
          class="btn btn-secondary dropdown-toggle col-12"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setShowTable3(!showTable3)}
        >
          Wallet To Bank-MoneyTransfer-Transaction-Details
        </button>
        {showTable3 && (
        <table className="table table-striped thead-light">
          <thead>
            <tr>
              <th>Transactionid</th>
              <th>Transaction-Date-Time</th>
              <th>Receiver-Account</th>
              <th>Amount</th>
              <th>Sender-Curreny-Type</th>
              <th>Receiver-Currency-Type</th>
            </tr>
          </thead>
          <tbody>
            {sortData(wallettobank).map((item) => (
              <tr key={item.transactionid}>
                <td>{item.transactionid}</td>
                <td>{item.transactiondatetime}</td>
                <td>{item.receiveraccount}</td>
                <td>{item.amount}</td>
                <td>{item.sendercurrency}</td>
                <td>{item.receivercurrency}</td>
              </tr>
            ))}
          </tbody>
        </table>)}
      </div>

      <div class="dropdown ">
        <button
          class="btn btn-secondary dropdown-toggle col-12"
          id="fullscreenBtn"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setShowTable4(!showTable4)}
        >
          Add-Money-Transaction-Details        
        </button>
        {showTable4 && (
        <table className="table table-striped thead-light">
          <thead>
            <tr>
              <th>Transactionid</th>
              <th>Transaction-Date-Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortData(historyData).map((item) => (
              <tr key={item.transactionid}>
                <td>{item.transactionid}</td>
                <td>{item.transactiondatetime}</td>
                <td>&#8377;{item.amount}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>)}
      </div>
    </div>
  );
}
