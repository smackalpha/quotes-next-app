"use client";
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const quoteURL = "https://api.quotable.io/quotes/random";

  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get(quoteURL)
      .then((res) => {
        console.log(res);
        setQuote(res.data[0].content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getQuote()
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "600" }}>Today Quotes</div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          border: "1px blue solid",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        {quote}
      </div>
      <button onClick={getQuote}>Get New Quote</button>
    </div>
  );
}
