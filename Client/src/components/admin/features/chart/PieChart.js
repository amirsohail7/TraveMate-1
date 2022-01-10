import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import axios from "axios";

/* const data = [
  { name: "Attractions", value: 218 },
  { name: "Hotels", value: 259 },
 { name: "Restaurants", value: 293 },
]; */

let hotelCount = "http://localhost:3040/hotel/count";
let restaurantCount = "http://localhost:3040/restaurant/count";
let attractionCount = "http://localhost:3040/attraction/count";

const requestOne = axios.get(hotelCount);
const requestTwo = axios.get(restaurantCount);
const requestThree = axios.get(attractionCount);

const colors = ["#DC143C", "#3CB371", "#FFA500"];

export default function PieChartTemp({ title }) {
  const [serviceStats, setServiceStats] = useState([]);

  useEffect(() => {
    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseThree = responses[2];
          setServiceStats(() => [
            { name: "HOTELS", value: responseOne.data },
            { name: "RESTAURANTS", value: responseTwo.data },
            { name: "ATTRACTIONS", value: responseThree.data },
          ]);
          // use/access these data
          /* console.log(responseOne, responseTwo, responseThree); */
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 className="chartTitle">{title}</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={serviceStats} fill="#8884d8" label>
            {serviceStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
