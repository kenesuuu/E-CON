"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { UserPlus, UserMinus } from "lucide-react";

const initialRooms = [
  { room: "Room 101", occupancy: 3, maxCapacity: 10 },
  { room: "Room 102", occupancy: 7, maxCapacity: 12 },
  { room: "Room 103", occupancy: 1, maxCapacity: 8 },
  { room: "Room 104", occupancy: 5, maxCapacity: 15 },
];

export default function RoomOccupancyChart() {
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = rooms.find((room) => room.room === event.target.value);
    if (selected) setSelectedRoom(selected);
  };

  const updateOccupancy = (change: number) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.room === selectedRoom.room
          ? {
              ...room,
              occupancy: Math.max(0, Math.min(room.maxCapacity, room.occupancy + change)),
            }
          : room
      )
    );

    setSelectedRoom((prev) => ({
      ...prev,
      occupancy: Math.max(0, Math.min(prev.maxCapacity, prev.occupancy + change)),
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-xl font-semibold mb-4">Room Occupancy Status</h2>

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
          <XAxis dataKey="room" stroke="#86efac" />
          <YAxis stroke="#86efac" />
          <Tooltip />
          <Legend />
          <Bar dataKey="occupancy" fill="#7ED957" name="Current Occupancy" />
          <Bar dataKey="maxCapacity" fill="#86efac" name="Max Capacity" />
        </BarChart>
      </ResponsiveContainer>

      {/* Controls for Selected Room */}
      <div className="mt-4 flex justify-between items-center border-t pt-4">
        <span className="font-medium text-gray-700">{selectedRoom.room}</span>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => updateOccupancy(-1)}
            variant="outline"
            size="sm"
            disabled={selectedRoom.occupancy === 0}
          >
            <UserMinus size={16} />
          </Button>
          <span className="text-gray-700">
            {selectedRoom.occupancy} / {selectedRoom.maxCapacity}
          </span>
          <Button
            onClick={() => updateOccupancy(1)}
            variant="outline"
            size="sm"
            disabled={selectedRoom.occupancy === selectedRoom.maxCapacity}
          >
            <UserPlus size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
