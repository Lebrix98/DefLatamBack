// Extraer 'Pool' desde paquete 'pg' (Postgressql)
const { Pool } = require("pg");

// Configuración conexión BD
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "name_database",
  allowExitOnIdle: true,
});

// Listar (Full)
const listAll = async () => {
  const query = "select * from table";

  const { rows } = await pool.query(query);

  return rows;
};

// Listar por ID
const listByID = async (id) => {
  const query = "select * from table where id = $1";
  const values = [id];

  const { rows } = pool.query(query, values);

  return rows[0];
};

// Agregar
const addElement = async (elem1, elem2) => {
  const query = "insert into table values (default, $1, $2)";
  const values = [elem1, elem2];

  const result = pool.query(query, values);

  return result;
};

module.exports = {
  listAll,
  listByID,
  addElement,
};
