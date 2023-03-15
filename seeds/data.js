const { faker } = require("@faker-js/faker");

const total = Math.floor(Math.random() * 10) + 5;
const tasks = Array(total).fill().map(() => {
    const text = faker.lorem.paragraph();
    return {
        content: text.split(".")[0],
        status: "pending",
    }
}) || [];

module.exports = { tasks };