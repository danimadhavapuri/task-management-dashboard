const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET tasks + search
router.get("/", authMiddleware, async (req, res) => {
    const search = req.query.search || "";
    const tasks = await Task.find({
        userId: req.user,
        title: { $regex: search, $options: "i" },
    });
    res.json(tasks);
});

// ADD task
router.post("/", authMiddleware, async (req, res) => {
    const task = await Task.create({
        title: req.body.title,
        userId: req.user,
    });
    res.json(task);
});

// UPDATE task
router.put("/:id", authMiddleware, async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
    });
    res.json({ message: "Updated" });
});

// DELETE task
router.delete("/:id", authMiddleware, async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;
