import React from "react";
import { LayoutDashboard, Map, BarChart2, Bell, TrafficCone } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-100 rounded-2xl mx-6 mt-3 p-2">
            {/* Dashboard */}
            <button className="flex-1 flex justify-center items-center gap-2 py-2 text-black font-medium hover:bg-white rounded-xl">
                <LayoutDashboard size={18} />
                Dashboard
            </button>

            {/* Signal Control (NEW) */}
            <button className="flex-1 flex justify-center items-center gap-2 py-2 text-black font-medium hover:bg-white rounded-xl">
                <TrafficCone size={18} />
                Signal Control
            </button>

            {/* Map View */}
            <button className="flex-1 flex justify-center items-center gap-2 py-2 text-black font-medium hover:bg-white rounded-xl">
                <Map size={18} />
                Map View
            </button>

            {/* Analytics */}
            <button className="flex-1 flex justify-center items-center gap-2 py-2 text-black font-medium hover:bg-white rounded-xl">
                <BarChart2 size={18} />
                Analytics
            </button>

            {/* Alerts */}
            <button className="flex-1 flex justify-center items-center gap-2 py-2 text-black font-medium hover:bg-white rounded-xl relative">
                <Bell size={18} />
                Alerts
                <span className="absolute top-2 right-6 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    4
                </span>
            </button>
        </nav>
    );
};

export default Navbar;
