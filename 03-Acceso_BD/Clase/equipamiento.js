const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const agregarEquipamiento = async (nombre) => {
  const consulta = "insert into equipamiento values (default, $1)";
  const values = [nombre];

  const result = await pool.query(consulta, values);
  console.log(result);
};

// agregarEquipamiento("Selfie Stick");

const registroEquipamiento = async () => {
  const consulta = "select * from equipamiento";
  const { rows } = await pool.query(consulta);
  console.log(rows);
  return rows
};

registroEquipamiento()

const deleteEquipamiento = async (id) => {
    const consulta = "delete from equipamiento where id = $1"
    const values = [id]

    const result = await pool.query(consulta, values)

    console.log(result)
}

// deleteEquipamiento(2)

module.exports = { agregarEquipamiento, registroEquipamiento, deleteEquipamiento }