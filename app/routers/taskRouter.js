const express = require("express");
const { list, create, remove } = require("../controllers/taskController");

const router = express.Router();

router.route("/")
    .get(list)
    .post(create)
    .delete(remove);

module.exports = router;