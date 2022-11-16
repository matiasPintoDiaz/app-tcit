const express = require("express");
const app = express();

const postsRoutes = require("./routes/posts.routes");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(postsRoutes);

app.listen(PORT, () => {
  console.log(`Conectado a ${PORT}!`);
});
