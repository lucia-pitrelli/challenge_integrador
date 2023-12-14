const mainControllers = {
  home: (req, res) => res.send("Ruta ver para pagina principal"),
  contact: (req, res) => res.send("Ruta ver para pagina de contactos"),
  about: (req, res) => res.send("Ruta para ver pagina de sobre nosotros"),
  faqs: (req, res) => res.send("Ruta para ver pagina de mensajes"),
};

module.exports = mainControllers;
