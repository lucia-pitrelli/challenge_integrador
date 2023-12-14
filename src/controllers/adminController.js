const adminControllers = {
  admin: (req, res) => res.send("Ruta ver para pagina de admin"),
  createGet: (req, res) => res.send("Ruta para ver pagina crear un admin"),
  createPost: (req, res) => res.send("Ruta para agregar un admin"),
  editGet: (req, res) => res.send("Ruta para ver el traer el admin a editar"),
  editPut: (req, res) => res.send("Ruta para ver actualizar un admin"),
  delete: (req, res) => res.send("Ruta para eliminar un admin"),
};

module.exports = adminControllers;
