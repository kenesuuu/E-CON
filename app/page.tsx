import "./styles/globals.css";
import EnergyChart from "../components/EnergyChart";
import RoomTemp from "../components/RoomTemp";
import RoomStatusChart from "../components/RoomStatusChart";
import RoomOccupancyChart from "@/components/RoomOccupancyChart";

export default function Home() {
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Energy Chart - Full Width on Small, More Space on Larger Screens */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
        <EnergyChart />
      </div>

      {/* Room Temperature - Stays in One Column but Adjusts */}
      <div className="col-span-1">
        <RoomTemp />
      </div>

      {/* Room Status Chart - Stays Side-by-Side on Medium & Large Screens */}
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <RoomStatusChart />
      </div>

      {/* Room Occupancy Chart - Adjusts to Medium & Large Screens */}
      <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
        <RoomOccupancyChart />
      </div>
    </main>
  );
}
