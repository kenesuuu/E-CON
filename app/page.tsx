import "./styles/globals.css"; 
import EnergyChart from "../components/EnergyChart";
import RoomTemp from "../components/RoomTemp";
import RoomStatusChart from "../components/RoomStatusChart";

export default function Home() {
  return (
    <main className="p-4 flex flex-wrap gap-4">
      {/* Top Row - Energy and Room Temperature Charts */}
      <div className="flex-1 min-w-[60%]">
        <EnergyChart />
      </div>
      <div className="w-[35%]">
        <RoomTemp />
      </div>
      <div className="w-[45%]">
        <RoomStatusChart />
      </div>
    </main>
  );
}

