import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const email = localStorage.getItem("email");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    };

    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-xl font-semibold">🚀 Task Dashboard</h2>
                {email && (
                    <p className="text-sm text-gray-600 mt-1">
                        Logged in as <span className="font-medium">{email}</span>
                    </p>
                )}
            </div>

            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>
    );
}
