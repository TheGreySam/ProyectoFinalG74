const pool = require("../config/config");
const jwt = require("jsonwebtoken");

const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT * FROM usuarios WHERE correo = $1 AND password = $2";

  const values = [email, password];

  const data = await pool.query(consulta, values);
  //console.log(data.rows[0]);
  if (!data.rowCount) throw { code: 404, message: "Credenciales incorrectos" };

  return data.rows[0];
};

const generarToken = (email) => {
  return jwt.sign({ email }, "clave_secreta");
};

module.exports = { verificarCredenciales, generarToken };