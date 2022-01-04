import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip,Legend } from 'recharts';

const data = [
  { name: 'Attractions', value: 218 },
  { name: 'Hotels', value: 259 },
  { name: 'Restaurants', value: 293 },
];

export default function PieChartTemp({title}) {
  
    return (
      <div style={{ width: '100%', height: 300 }}>
      <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
