const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Mengatur direktori statis untuk file build Unity
app.use(express.static(path.join(__dirname, "Build")));

// Rute untuk mengarahkan ke index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
