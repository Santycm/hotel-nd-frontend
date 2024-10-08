// Todos los componentes para que puedan ser mejor aprovechados en la web y que despue pueden ser llamados y este componente lo hizoo el monardo

import { useState, useEffect } from "react";
import {API_URL} from "../config.js";

 export const Dbcomponent = () => {
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

