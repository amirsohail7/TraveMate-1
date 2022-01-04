import React, { useEffect, useMemo, useState } from "react";
import Chart from "../../features/chart/Chart";
import PieChart from '../../features/chart/PieChart'
import "./adminHome.css";
import WidgetSm from "../../features/widgetSm/WidgetSm";
import WidgetLg from "../../features/widgetLg/WidgetLg";
import axios from "axios";

export default function AdminHome() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:3040/traveler/stats/");

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  /* console.log(userStats); */

  return (
    <div className="adminHome">
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        {/* <WidgetLg /> */}
        <PieChart title="Service Analytics"/>
      </div>
      
    </div>
  );
}