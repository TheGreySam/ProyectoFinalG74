const express = require("express");
const {
  verificarCredenciales,
  generarToken,
} = require("../controllers/authController");

const router = express.Router();

// Ruta para el login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await verificarCredenciales(email, password);

    const token = generarToken({ email: userData.correo, id: userData.id, nombre: userData.nombre });

    res.send(token);
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ message: error.message || "Error al autenticar" });
  }
});

module.exports = router;