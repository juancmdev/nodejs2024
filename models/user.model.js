import { db } from "../database/conection.database.js";

const create = async ({ email, password, username }) => {
  const query = {
    text: `
        INSERT INTO users (email, password, username)
        VALUES ($1, $2, $3)
        `,
    values: [email, password, username],
  };
};

export const UserModel = {
  create,
};
