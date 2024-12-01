import pg from "pg";

const { Pool } = pg;

const connectionString = "";

export const db = new Pool({
  allowExitOnIdle: true,
  connectionString,
});
