const { faker } = require("@faker-js/faker");

const total = Math.floor(Math.random() * 10) + 5;
const tasks = Array(total).fill().map(() => {
    return {
        content: faker.lorem.paragraph(),
        status: "pending",
    }
}) || [];

module.exports = { tasks };