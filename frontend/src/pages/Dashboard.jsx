import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    // 🔐 Protect dashboard
    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }
        fetchTasks();
    }, []);

    // 📥 Fetch tasks
    const fetchTasks = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5000/api/tasks?search=${search}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setTasks(res.data);
        } catch (err) {
            console.error("Failed to fetch tasks");
        }
    };

    // ➕ Add / ✏️ Update task
    const handleSubmit = async () => {
        if (!title.trim()) return;

        try {
            if (editId) {
                await axios.put(
                    `http://localhost:5000/api/tasks/${editId}`,
                    { title },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setEditId(null);
            } else {
                await axios.post(
                    "http://localhost:5000/api/tasks",
                    { title },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            }

            setTitle("");
            fetchTasks();
        } catch (err) {
            console.error("Failed to save task");
        }
    };

    // ❌ Delete task
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchTasks();
        } catch (err) {
            console.error("Failed to delete task");
        }
    };

    // 🚪 Logout
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 flex items-center justify-center p-4">
            <div className="w-full max-w-xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            🚀 Task Dashboard
                        </h1>
                        {email && (
                            <p className="text-sm text-gray-600 mt-1">
                                Logged in as{" "}
                                <span className="font-medium text-gray-800">{email}</span>
                            </p>
                        )}
                    </div>

                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="🔍 Search tasks..."
                    className="w-full mb-4 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={fetchTasks}
                />

                {/* Add / Edit */}
                <div className="flex gap-2 mb-5">
                    <input
                        type="text"
                        placeholder="Enter task..."
                        className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-indigo-500 hover:bg-indigo-600 transition text-white px-5 rounded-lg"
                    >
                        {editId ? "Update" : "Add"}
                    </button>
                </div>

                {/* Task List */}
                {tasks.length === 0 && (
                    <p className="text-center text-gray-500">No tasks found</p>
                )}

                {tasks.map((task) => (
                    <div
                        key={task._id}
                        className="flex justify-between items-center bg-white rounded-xl shadow-sm p-3 mb-3 hover:shadow-md transition"
                    >
                        <span className="text-gray-700">{task.title}</span>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setTitle(task.title);
                                    setEditId(task._id);
                                }}
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => deleteTask(task._id)}
                                className="text-red-500 hover:text-red-700 font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
