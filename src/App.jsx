import React from "react";
import { useState, useEffect } from "react";
import {API_URL} from "./config.js";

export const App = () => {
  const [dbTest, setDBTest] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${API_URL}/testdb`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setDBTest([...data]);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="text-[20px] text-black">HORAAa DESDE LA DB</h1>
      {dbTest.map((item) => {
        return (
          <div key={item.now}>
            <p>{item.now}</p>
          </div>
        );
      })}
    </>
  );
};
