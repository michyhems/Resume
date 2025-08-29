const express = require("express");
const router = express.Router();
const Model = require("../models/projects"); //model schema HERE

//Get all
router.get("/", async (req, res) => {
    try {
        const entries = await Model.find();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//health check endpoint
router.get("/health", async (req, res) => {
    try {
        res.status(200).json("OK");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Create
router.post("/", async (req, res) => {
    const body = req.body;
    const entry = new Model({
        title: body.title,
        source: body.source,
        gitRepo: body.gitRepo,
        description: body.description,
        imageSource: body.imageSource,
    });
    try {
        const newEntry = await entry.save();
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Update
router.patch("/:id", getTask, async (req, res) => {
    const body = req.body;
    if (body.title !== null) {
        res.entry.title = body.title;
    }
    if (body.source !== null) {
        res.entry.source = body.source;
    }
    if (body.gitRepo !== null) {
        res.entry.gitRepo = body.gitRepo;
    }
    if (body.description !== null) {
        res.entry.description = body.description;
    }
    if (body.imageSource !== null) {
        res.entry.imageSource = body.imageSource;
    }
    try {
        const newEntry = await res.entry.save();
        res.json(newEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete
router.delete("/:id", getTask, async (req, res) => {
    try {
        await res.entry.deleteOne();
        res.json({ message: "deleted entry" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Middleware
async function getTask(req, res, next) {
    let entry;
    try {
        entry = await Model.findById(req.params.id);
        if (entry === null) {
            return res.status(404).json({ message: "Cannot find entry" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.entry = entry;
    next();
}
module.exports = router;
