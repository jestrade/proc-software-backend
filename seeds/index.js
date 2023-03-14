const databaseServer = require("./../database-server");
const Task = require("../app/models/taskModel");
const { tasks } = require("./data");

(async () => {
    await databaseServer.init();
    try {
        Task.collection.drop();
    } catch (err) { }

    tasks.forEach(async (task, i) => {
        console.log(`task ${i + 1}:`, task);
        const newTask = new Task(task);
        try {
            await newTask.save();
            console.log(task, "created");
        } catch (err) {
            console.log("couldn't create the task:", task);
            console.log(err);
        }
    });
})();