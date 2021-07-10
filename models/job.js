const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    skills: [{ type: String }],
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

const Job = mongoose.model("job", jobSchema);

const validate = (job) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        company: Joi.string().required(),
        experience: Joi.number().required(),
        salary: Joi.number().required(),
        location: Joi.string().required(),
        description: Joi.string().required(),
        skills: Joi.array().items(Joi.string()),
    });
    return schema.validate(job);
};

module.exports = { Job, validate };
