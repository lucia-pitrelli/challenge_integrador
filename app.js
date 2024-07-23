const express = require("express");
const app = express();
const path = require("path");

//const mainRoutes = require("./src/routes/mainRoutes");
//const shopRoutes = require("./src/routes/shopRoutes");
//const adminRoutes = require("./src/routes/adminRoutes");
//const authRoutes = require("./src/routes/authRoutes");

//app.use(express.static("public"));
//app.use("/", mainRoutes);
//app.use("/", shopRoutes);
//app.use("/", adminRoutes);
//app.use("/", authRoutes);

const staticFolder = path.resolve(__dirname, "public");
app.use(express.static(staticFolder));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

/*app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/admin/register.html"));
});*/

app.get("/register", (req, res) => {
  const filePath = path.resolve(__dirname, "./pages/admin/register.html");
  console.log("Ruta del archivo:", filePath);
  res.sendFile(filePath);
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/admin/login.html"));
});

app.listen(4000, () =>
  console.log("servidor corriendo en http://localhost:4000")
);
