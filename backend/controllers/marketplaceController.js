const format = require("pg-format");
const pool = require("../config/config");

// Registrar usuario nuevo
const registrarUsuario = async (usuario) => {
  const consulta = "INSERT INTO usuarios (correo, nombre, apellidos, password, telefono, fecha_de_nac, pais, ciudad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
  const values = [usuario.correo, usuario.nombre, usuario.apellidos, usuario.password, usuario.telefono, usuario.fecha_de_nac, usuario.pais, usuario.ciudad];
  const { rows: usuarioExistente } = await pool.query("SELECT * FROM usuarios WHERE correo = $1", [usuario.correo]);
  if (usuarioExistente.length > 0) {
    throw { code: 409, message: "El correo ya está registrado" };
  } 
  const { rows: nuevoUsuario } = await pool.query(consulta, values);
  return nuevoUsuario[0];
};

// Obtener productos con limites
const obtenerProductos = async ({ limit = 10 }) => {
  const consulta = "SELECT * FROM productos LIMIT $1";
  const { rows: productos } = await pool.query(consulta, [limit]);
  return productos;
};

// Obtener producto por ID
const obtenerProductoPorId = async (id) => {
  const consulta = "SELECT * FROM productos WHERE id = $1";
  const { rows: producto } = await pool.query(consulta, [id]);
  return producto[0];
};

// Obtener productos por nombre
const obtenerProductosPorNombre = async (nombre) => {
  const consulta = "SELECT * FROM productos WHERE nombre ILIKE $1";
  const { rows: productos } = await pool.query(consulta, [`%${nombre}%`]);
  return productos;
};

// Obtener productos por categoria
const obtenerProductosPorCategoria = async (categoria) => {
  const consulta = "SELECT * FROM productos WHERE categoria = $1";
  const { rows: productos } = await pool.query(consulta, [categoria]);
  return productos;
};

// Obtener productos por precio
const obtenerProductosPorPrecio = async (min, max) => {
  const consulta = "SELECT * FROM productos WHERE precio BETWEEN $1 AND $2";
  const { rows: productos } = await pool.query(consulta, [min, max]);
  return productos;
};

// Obtener Favoritos
const obtenerFavoritos = async (userId) => {
  const consulta = `SELECT p.* FROM favoritos f JOIN productos p ON f.producto_id = p.id WHERE f.user_id = $1`;
  const { rows: productos } = await pool.query(consulta, [userId]);
  return productos;
};

// Obtener productos por ID de usuario
const obtenerProductosPorUsuarioId = async (userId) => {
  const consulta = "SELECT * FROM productos WHERE user_id = $1";
  const { rows: productos } = await pool.query(consulta, [userId]);
  return productos;
};

// obtener direcciones por ID de usuario
const obtenerDireccionesPorUsuarioId = async (userId) => {
  const consulta = "SELECT * FROM direcciones WHERE user_id = $1";
  const { rows: direcciones } = await pool.query(consulta, [userId]);
  return direcciones;
};

// obtener publicaciones por ID de usuario
const obtenerPublicacionesPorUsuarioId = async (userId) => {
  const consulta = "SELECT * FROM publicaciones WHERE user_id = $1";
  const { rows: publicaciones } = await pool.query(consulta, [userId]);
  return publicaciones;
};

// obtener informacion de usuario por ID de usuario
const obtenerUsuarioPorId = async (userId) => {
  const consulta = "SELECT * FROM usuarios WHERE id = $1";
  const { rows: usuario } = await pool.query(consulta, [userId]);
  return usuario[0];
};

// obtener piblucaciones por id de producto
const obtenerPublicacionesPorProductoId = async (productoId) => {
  const consulta = "SELECT * FROM publicaciones WHERE producto_id = $1";
  const { rows: publicaciones } = await pool.query(consulta, [productoId]);
  return publicaciones;
};

module.exports = {
  registrarUsuario,
  obtenerProductos,
  obtenerProductoPorId,
    obtenerProductosPorNombre,
    obtenerProductosPorCategoria,
    obtenerProductosPorPrecio,
    obtenerFavoritos,
    obtenerProductosPorUsuarioId,
    obtenerDireccionesPorUsuarioId,
    obtenerPublicacionesPorUsuarioId,
    obtenerUsuarioPorId,
    obtenerPublicacionesPorProductoId,

};