const express = require("express");
const app = express();
const cors = require('cors');

const postsRoutes = require("./routes/posts.routes");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(postsRoutes); // Rutas de la aplicación

app.listen(PORT, () => {
  console.log(`Conectado a ${PORT}!`);
});
