const shopControllers = {
    shop: (req, res) => res.send("Ruta ver para pagina de shop"),
    item: (req, res) => res.send("Ruta para ver pagina shop con item"),
    itemPost: (req, res) => res.send("Ruta para agregar un item"),
    cartGet: (req, res) => res.send("Ruta para ver el carrito"),
    cartPost: (req, res) => res.send("Ruta para ver chequear el carrito")

}

module.exports = shopControllers;