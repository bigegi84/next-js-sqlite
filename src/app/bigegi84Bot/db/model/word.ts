import { DataTypes } from "sequelize";
import context from "../context";

export default context.define(
  "word",
  {
    word: DataTypes.STRING,
    symbol: DataTypes.STRING,
  },
  {
    // defaultScope: {
    //   attributes: {
    //     exclude: ["password"],
    //   },
    // },
  }
);
