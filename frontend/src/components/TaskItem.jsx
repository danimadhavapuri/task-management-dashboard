import { useState } from "react";

export default function TaskItem({ task, onDelete, onEdit }) {
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const saveEdit = () => {
        onEdit(task._id, newTitle);
        setIsEdit(false);
    };

    return (
        <div className="flex justify-between items-center border p-3 rounded mb-2">
            {isEdit ? (
                <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="border p-1 flex-1 mr-2"
                />
            ) : (
                <span>{task.title}</span>
            )}

            <div className="flex gap-2">
                {isEdit ? (
                    <button
                        onClick={saveEdit}
                        className="bg-green-500 text-white px-3 rounded"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setIsEdit(true)}
                        className="bg-yellow-400 px-3 rounded"
                    >
                        Edit
                    </button>
                )}

                <button
                    onClick={() => onDelete(task._id)}
                    className="bg-red-500 text-white px-3 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
