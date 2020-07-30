const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "1269",
  post: 5432,
  host: "localhost",
  database: "perntodo"
});

module.exports = pool;
