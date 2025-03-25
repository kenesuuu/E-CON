'use client'
import { FaHome, FaLeaf, FaUsers, FaBullseye, FaCog, FaQuestionCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-lg flex flex-col border-r border-gray-300">
      {/* Brand */}
      <div className="flex items-center gap-3 p-3 border-b border-gray-300 shadow-md">
      <div className="bg-[#7ED957] text-white p-2 rounded-lg">
        <FaHome size={23} />
      </div>
        <h1 className="text-xl font-bold">ECON</h1>
      </div>

      {/* User Info */}
      <div className="p-4">
        <p className="text-sm font-semibold">Dashboard</p>
        <p className="text-xs text-gray-500"></p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <p className="text-xs text-gray-400 uppercase mb-2">Main</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded-lg bg-[#7ED957] text-white">
            <FaHome size={16} />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaLeaf size={16} />
            <span>Lorem</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaUsers size={16} />
            <span>Ipsum</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaBullseye size={16} />
            <span>Lorem</span>
          </li>
        </ul>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">Other</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaCog size={16} />
            <span>Settings</span>
          </li>
          <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <FaQuestionCircle size={16} />
            <span>Help</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}