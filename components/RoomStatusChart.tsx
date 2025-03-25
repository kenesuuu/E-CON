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
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = rooms.find((room) => room.room === event.target.value);
    if (selected) setSelectedRoom(selected);
  };

  const toggleDevice = (device: "lights" | "ac") => {
    setRooms((prev) =>
      prev.map((room) =>
        room.room === selectedRoom.room ? { ...room, [device]: !room[device] } : room
      )
    );
    setSelectedRoom((prev) => ({ ...prev, [device]: !prev[device] }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-xl font-semibold mb-4">Room Status Dashboard</h2>

      {/* Dropdown to Select Room */}
      <div className="mb-4">
        <label htmlFor="roomSelect" className="font-medium text-gray-700 mr-2">
          Select Room:
        </label>
        <select
          id="roomSelect"
          value={selectedRoom.room}
          onChange={handleRoomChange}
          className="border border-gray-300 rounded px-3 py-2"
        >
          {rooms.map((room) => (
            <option key={room.room} value={room.room}>
              {room.room}
            </option>
          ))}
        </select>
      </div>

      {/* Chart for Selected Room */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={[selectedRoom]} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="room" stroke="#8D8D8D" />
          <YAxis stroke="#8D8D8D" />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#7ED957" name="Temperature (°C)" />
          <Bar dataKey="humidity" fill="#22C55E" name="Humidity (%)" />
        </BarChart>
      </ResponsiveContainer>

      {/* Toggle Controls for Selected Room */}
      <div className="mt-4 flex justify-between items-center border-t pt-4">
        <span className="font-medium text-gray-700">{selectedRoom.room}</span>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Lights</span>
          <Switch
            onChange={() => toggleDevice("lights")}
            checked={selectedRoom.lights}
            onColor="#7ED957"
            offColor="#9E9E9E"
          />
          <span className="text-gray-600">AC</span>
          <Switch
            onChange={() => toggleDevice("ac")}
            checked={selectedRoom.ac}
            onColor="#86efac"
            offColor="#9E9E9E"
          />
        </div>
      </div>
    </div>
  );
}
