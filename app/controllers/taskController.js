const Task = require("../models/taskModel");

const list = (req, res) => {

    Task.find({}, ["content", "status", "createdAt"])
        .sort({ createdAt: -1 })
        .then(async (tasks) => {
            const total = await Task.estimatedDocumentCount();

            res.status(200).json({
                total,
                data: tasks,
            });
        });
};

const create = (req, res) => {
    const { content, status } = req.body;

    const task = {
        content,
        status
    };

    const newTask = new Task(task);
    newTask.save()
        .then((taskCreated) => {
            res.status(200).json(taskCreated);
        })
        .catch((error) => {
            res.status(200).json(error);
        });
};

const update = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    Task.updateOne({ _id: id }, { status: status })
        .then(() => {
            res.status(200).json({ message: "ok" });
        })
        .catch((error) => {
            res.status(200).json(error);
        });
};

const remove = (req, res) => {
    const { id } = req.params;
    Task.deleteOne({ _id: id })
        .then(() => {
            res.status(200).json({ message: "ok" });
        })
        .catch((error) => {
            res.status(200).json(error);
        });
};

const removeAll = (req, res) => {
    Task.deleteMany({})
        .then(() => {
            res.status(200).json({ message: "ok" });
        })
        .catch((error) => {
            res.status(200).json(error);
        });
};

module.exports = {
    list,
    create,
    remove,
    removeAll,
    update,
};