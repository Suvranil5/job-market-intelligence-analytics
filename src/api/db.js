const { Pool } = require("pg");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.join(__dirname, ".env"),
  override: true,
});

console.log("Database selected:", process.env.PG_DATABASE);

const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

module.exports = pool;