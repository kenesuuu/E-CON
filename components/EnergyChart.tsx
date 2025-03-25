"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Card } from "@/components/ui/card"; // Using shadcn/ui
import { ChevronDown } from "lucide-react";

const data = [
    { month: "Jan", value1: 10, value2: 5 },
    { month: "Feb", value1: 20, value2: 15 },
    { month: "Mar", value1: 35, value2: 30 },
    { month: "Apr", value1: 40, value2: 25 },
    { month: "May", value1: 30, value2: 20 },
    { month: "Jun", value1: 60, value2: 50 },
    { month: "Jul", value1: 70, value2: 55 },
    { month: "Aug", value1: 75, value2: 60 },
    { month: "Sep", value1: 85, value2: 70 },
    { month: "Oct", value1: 80, value2: 65 },
    { month: "Nov", value1: 55, value2: 50 },
    { month: "Dec", value1: 50, value2: 60 },
];

export default function EnergyChart() {
  return (
    <Card className="w-[420px] bg-white p-6 rounded-xl shadow-lg w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">Energy Consumption</h2>
        <button className="flex items-center bg-[#7ED957] hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm shadow">
          Room 1 <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#334155" tick={{ fontSize: 12 }} />
          <YAxis stroke="#334155" tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: "#7ED957", borderRadius: "8px", color: "#fff" }} />
          <Line type="monotone" dataKey="value1" stroke="#7ED957" strokeWidth={2.5} dot={{ r: 3, fill: "#22c55e" }} />
          <Line type="monotone" dataKey="value2" stroke="#86efac" strokeWidth={2.5} dot={{ r: 3, fill: "#86efac" }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-6 flex justify-between">
        <div className="text-center">
          <p className="text-sm text-gray-600">Current Usage</p>
          <p className="text-xl font-bold text-black">₱23,145.00</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Last Month</p>
          <p className="text-xl font-bold text-black">₱25,000.00</p>
        </div>
      </div>
    </Card>
  );
}
