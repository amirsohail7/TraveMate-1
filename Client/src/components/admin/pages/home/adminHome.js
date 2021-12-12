import React from 'react'
import Chart from "../../features/chart/Chart";
import "./adminHome.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../features/widgetSm/WidgetSm";
import WidgetLg from "../../features/widgetLg/WidgetLg";

export default function adminHome() {
  return (
    <div className="adminHome">
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}