const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result);
};

// getDate();

// Agregar Viaje
const agregarViaje = async (destino, presupuesto) => {
    const consulta = "INSERT INTO viajes VALUES (DEFAULT, $1, $2)";
    const values = [destino, presupuesto]

    const result = await pool.query(consulta, values)
    console.log(result)
}

// agregarViaje("Valdivia", 150000);

const registroViaje = async () => {
    const consulta = "SELECT * FROM viajes";

    const {rows} = await pool.query(consulta)
    console.log(rows)
    return rows
}

registroViaje()

module.exports = { agregarViaje, registroViaje }