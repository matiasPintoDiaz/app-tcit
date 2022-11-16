const express = require("express");
const app = express();
const cors = require('cors');

const postsRoutes = require("./routes/posts.routes");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(postsRoutes);

app.listen(PORT, () => {
  console.log(`Conectado a ${PORT}!`);
});
