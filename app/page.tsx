<<<<<<< HEAD
"use client";
import Header from "./components/Header";
import SensorData from "./components/SensorData";
import ControlPanel from "./components/ControlPanel";
import UserFeedback from "./components/UserFeedback";
import Monitoring from "./components/Monitoring";
import Analytics from "./components/Analytics";
import SystemControl from "./components/SystemControl";


export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SensorData />
          <ControlPanel />
        </div>
        <SystemControl />
        <Analytics />
        <UserFeedback />
        <Monitoring />
      </div>
    </div>
  );
}
=======
import EnergyChart from "./components/EnergyChart";
import RoomTemp from "./components/RoomTemp";
import RoomStatusChart from "./components/RoomStatusChart";

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
>>>>>>> d117898 (Initial commit)
