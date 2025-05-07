const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "user_list",
  allowExitOnIdle: true,
});

const buscarUsuario = async (email) => {
  const consulta = "select email from usuarios where email = $1";
  const values = [email];
  const err = "No hay usuarios registrados con ese mail.";

  const { rows } = await pool.query(consulta, values);

  console.log(rows[0])

  if (rows[0] === undefined) {
    return err;
  }

  return rows;
};

const agregarUsuario = async (email, password) => {
  const consulta = "insert into usuarios values (default, $1, $2)";
  const values = [email, password];

  const result = pool.query(consulta, values);
  console.log(result);
};

module.exports = { buscarUsuario, agregarUsuario };
