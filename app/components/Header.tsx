<<<<<<< HEAD
export default function Header() {
  return (
    <header className="bg-primary text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Arlegui Campus Air Conditioning System</h1>
      <p className="text-sm mt-2">Real-time monitoring and control for energy efficiency</p>
=======
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between border-b border-gray-300 h-16">
      {/* Left Side: Logo and Title */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain shrink-0" />
        <h1 className="text-lg font-semibold text-gray-800">Arlegui Campus</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 ml-6">
        <ul className="flex space-x-6 text-gray-600">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
        </ul>
      </nav>

      {/* Right Side: Profile & Notifications */}
      <div className="flex items-center space-x-4">
        <button className="relative">
          <FaBell className="text-gray-600 hover:text-gray-900 text-xl" />
        </button>
        <FaUserCircle className="text-gray-600 hover:text-gray-900 text-2xl" />
      </div>
>>>>>>> d117898 (Initial commit)
    </header>
  );
}