import express from "express";
import api from "routes/api";
import path from "path";

const port = 3000;
const app = express();

app.use("/api", api);

app.use(express.static(path.join(__dirname, '..', '/client')));

<<<<<<< HEAD
app.get("/*", (req, res) => {
  let rootClientPath = path.join(__dirname, '..', 'client');
  res.sendFile('index.html', {root: rootClientPath});
});
=======
// app.get("/", (req, res) => {
//   // let rootClientPath = path.join(__dirname, '..', 'client');
//   res.send("hejsan");
//   // res.send(path.join(rootClientPath, 'index.html'));
//   // res.sendFile('index.html', {root: rootClientPath});
// });
>>>>>>> fabdf28f9578ea4d491da1bf0313682d4689127d

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    console.log(`App listening on port ${port}`);
  }
});
