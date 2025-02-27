"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [place1, setPlace1] = useState("");
  const [place2, setPlace2] = useState("");
  const [msg, setMsg] = useState("");
  const [simi, setSimi] = useState("");
  const [conf, setConf] = useState("");

  const check = async () => {
    console.log("Request Payload:", { place1, place2 });

    if (!place1 || !place2) {
      setMsg("Please enter both addresses.");
      return;
    }
    setMsg("Analysing....");
    try {
      const res = await axios.post("/api/check", { place1, place2 });

      if (res.data.similarity !== undefined && res.data.confidenceLevel) {
        
        setSimi(res.data.similarity ? "True" : "False");
        setConf(res.data.confidenceLevel);
        setMsg(""); 
      } else if (res.data.error) {
        setMsg(res.data.error);
        setSimi("");
        setConf("");
      } else {
        setMsg("Unexpected response from the server.");
        setSimi("");
        setConf("");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
      setMsg("An error occurred while checking the addresses.");
      setSimi("");
      setConf("");
    }
  };

  return (
    <>
    <head>
      <title>Geolocation comparison</title>
      <meta name="description" content="Explore the AI based website that compairs two geolocation"></meta>
      <meta name="keywords" content="place comparison, geolocation checker, location check, two geolocation check"></meta>
    </head>
    <div className="main">
      <div className="center">
        <h1>Address Checker</h1>
        <div className="data">
          <label htmlFor="place1">
            <h2>Address 1:</h2>
          </label>
          <input
            id="place1"
            type="text"
            placeholder="Enter place 1"
            required
            onChange={(e) => setPlace1(e.target.value)}
          />
          <label htmlFor="place2">
            <h2>Address 2:</h2>
          </label>
          <input
            id="place2"
            type="text"
            placeholder="Enter place 2"
            required
            onChange={(e) => setPlace2(e.target.value)}
          />
          <h3 style={{ color: "red", margin:"10px" }}>{msg}</h3>
          {simi && (
            <h3 style={{ margin: "10px" }}>
              Similarity:  {simi} <br></br> Confidence:  {conf} 
            </h3>
          )}
          <button onClick={check}>Submit</button>
        </div>
        <div style={{margin:"10px"}}><h3 >Note:</h3><h3><span style={{color:"greenyellow"}}>Address format: </span>Locality, City, State, Country</h3></div>
      </div>
    </div>
  </>
  );
}
