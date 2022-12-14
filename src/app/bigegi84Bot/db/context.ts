import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('sqlite::memory:')
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "data/sqlite/bigegi84Bot.db",
});

export default sequelize;
