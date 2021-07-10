const { Job, validate } = require("../models/job");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find().select("-__v").sort({ createdAt: -1 });
        res.send(jobs);
    } catch (error) {
        console.log(error);
        res.send("An error occured!");
    }
});

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const job = await new Job(req.body).save();

        res.send(job);
    } catch (error) {
        console.log(error);
        res.send("An error occured!");
    }
});

module.exports = router;
