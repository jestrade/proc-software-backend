const express = require("express");
const { list, create, remove, removeAll, update } = require("../controllers/taskController");

const router = express.Router();

router.route("/")
    .get(list)
    .post(create)
    .delete(removeAll);

router.route("/:id")
    .put(update)
    .delete(remove);

module.exports = router;