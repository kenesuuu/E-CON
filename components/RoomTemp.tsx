"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { day: "Sat", Lorem: 40, Ipsum: 20 },
  { day: "Sun", Lorem: 50, Ipsum: 30 },
  { day: "Mon", Lorem: 45, Ipsum: 25 },
  { day: "Tue", Lorem: 60, Ipsum: 15 },
  { day: "Wed", Lorem: 20, Ipsum: 10 },
  { day: "Thu", Lorem: 50, Ipsum: 20 },
  { day: "Fri", Lorem: 65, Ipsum: 15 },
];

export default function RoomTemp() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full">
      <h2 className="text-lg font-semibold mb-4">Lorem Ipsum</h2>
      <div className="flex justify-between items-center mb-4">
        <Legend />
        <button className="flex items-center bg-[#7ED957] hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm shadow">
          This Week <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Lorem" stackId="a" fill="#7ED957" />
          <Bar dataKey="Ipsum" stackId="a" fill="#22C55E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
