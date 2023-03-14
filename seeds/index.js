const databaseServer = require("./../database-server");
const Task = require("../app/models/taskModel");
const { tasks } = require("./data");

(async () => {
    await databaseServer.init();
    try {
        Task.collection.drop();
    } catch (err) { }

    await tasks.forEach(async (task, i) => {
        console.log(`task ${i + 1}:`, task);
        const newTask = new Task(task);
        try {
            await newTask.save();
        } catch (err) {
            console.log("couldn't create the task:", task);
        }
    });
})();