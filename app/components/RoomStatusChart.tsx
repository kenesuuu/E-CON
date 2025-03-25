"use client";
import { useState } from "react";
import Switch from "react-switch";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const initialRooms = [
  { room: "Room 101", lights: true, ac: false, temp: 25, humidity: 60 },
  { room: "Room 102", lights: false, ac: true, temp: 22, humidity: 55 },
  { room: "Room 103", lights: true, ac: true, temp: 24, humidity: 58 },
  { room: "Room 104", lights: false, ac: false, temp: 26, humidity: 65 },
];

export default function RoomStatusChart() {
  const [rooms, setRooms] = useState(initialRooms);

  const toggleDevice = (roomIndex: number, device: "lights" | "ac") => {
    setRooms((prev) =>
      prev.map((room, i) =>
        i === roomIndex ? { ...room, [device]: !room[device] } : room
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4 text-[#111]">Room Status Dashboard</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={rooms} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="room" stroke="#8D8D8D" />
          <YAxis stroke="#8D8D8D" />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#7ED957" name="Temperature (°C)" />
          <Bar dataKey="humidity" fill="#22C55E" name="Humidity (%)" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4">
        {rooms.map((room, index) => (
          <div key={room.room} className="flex justify-between items-center border-b py-2">
            <span className="font-medium text-gray-700">{room.room}</span>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Lights</span>
              <Switch
                onChange={() => toggleDevice(index, "lights")}
                checked={room.lights}
                onColor="#7ED957"
                offColor="#9E9E9E"
              />
              <span className="text-gray-600">AC</span>
              <Switch
                onChange={() => toggleDevice(index, "ac")}
                checked={room.ac}
                onColor="#86efac"
                offColor="#9E9E9E"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
