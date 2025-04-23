const express = require("express");
const { obtenerProductos } = require("../controllers/marketplaceController");
const router = express.Router();

// Obtener productos con limites
router.get("/productos", async (req, res) => {
  const { limit } = req.query;
  try {
    const productos = await obtenerProductos({ limit });
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

// Obtener producto por ID
router.get("/productos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await obtenerProductoPorId(id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ error: "Error al obtener producto" });
  }
});

// Obtener productos por nombre
router.get("/productos/nombre/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    const productos = await obtenerProductosPorNombre(nombre);
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos por nombre:", error);
    res.status(500).json({ error: "Error al obtener productos por nombre" });
  }
});

// Obtener productos por categoria
router.get("/productos/categoria/:categoria", async (req, res) => {
  const { categoria } = req.params;
  try {
    const productos = await obtenerProductosPorCategoria(categoria);
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos por categoria:", error);
    res.status(500).json({ error: "Error al obtener productos por categoria" });
  }
});

// Obtener productos por precio
router.get("/productos/precio", async (req, res) => {
  const { min, max } = req.query;
  try {
    const productos = await obtenerProductosPorPrecio(min, max);
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos por precio:", error);
    res.status(500).json({ error: "Error al obtener productos por precio" });
  }
});

// Obtener Favoritos
router.get("/favoritos/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const productos = await obtenerFavoritos(userId);
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener favoritos:", error);
    res.status(500).json({ error: "Error al obtener favoritos" });
  }
});

// Obtener productos por ID de usuario
router.get("/productos/usuario/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const productos = await obtenerProductosPorUsuarioId(userId);
    res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener productos por ID de usuario:", error);
    res.status(500).json({ error: "Error al obtener productos por ID de usuario" });
  }
});

// Obtener direcciones por ID de usuario
router.get("/direcciones/usuario/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const direcciones = await obtenerDireccionesPorUsuarioId(userId);
    res.status(200).json(direcciones);
  } catch (error) {
    console.error("Error al obtener direcciones por ID de usuario:", error);
    res.status(500).json({ error: "Error al obtener direcciones por ID de usuario" });
  }
});

// Obtener publicaciones por ID de usuario
router.get("/publicaciones/usuario/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const publicaciones = await obtenerPublicacionesPorUsuarioId(userId);
    res.status(200).json(publicaciones);
  } catch (error) {
    console.error("Error al obtener publicaciones por ID de usuario:", error);
    res.status(500).json({ error: "Error al obtener publicaciones por ID de usuario" });
  }
});

// obtener publicaciones por id de producto
router.get("/publicaciones/producto/:productoId", async (req, res) => {
  const { productoId } = req.params;
  try {
    const publicaciones = await obtenerPublicacionesPorProductoId(productoId);
    res.status(200).json(publicaciones);
  } catch (error) {
    console.error("Error al obtener publicaciones por ID de producto:", error);
    res.status(500).json({ error: "Error al obtener publicaciones por ID de producto" });
  }
});

// registrar usuario nuevo
router.post("/usuarios", async (req, res) => {
  const { correo, nombre, apellidos, password, telefono, fecha_de_nac, pais, ciudad } = req.body;
  try {
    const nuevoUsuario = await registrarUsuario(nombre, email, password);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Actualizar usuario
router.put("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  try {
    const usuarioActualizado = await actualizarUsuario(id, nombre, email, password);
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
});


module.exports = router;