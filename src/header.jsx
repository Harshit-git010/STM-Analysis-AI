import React from "react";
import { Settings, Users } from "lucide-react";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-3 bg-white shadow">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-black rounded-md">
                    <span className="text-white text-lg">⚡</span>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">AI Traffic Management System</h1>
                    <p className="text-sm text-gray-500">
                        Real-time urban traffic optimization
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                <span className="text-sm text-green-600">● System Online</span>
                <span className="text-sm text-gray-600">↗ 99.7% Uptime</span>
                <span className="text-sm text-gray-600">🛡 5/6 AI Active</span>

                <button className="flex items-center gap-1 px-3 py-1 rounded-lg border hover:bg-gray-200">
                    <Settings size={16} />
                    <span>Settings</span>
                </button>

                <button className="flex items-center gap-1 px-3 py-1 rounded-lg border hover:bg-gray-200">
                    <Users size={16} />
                    <span>Operators</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
