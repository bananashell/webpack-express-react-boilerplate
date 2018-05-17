import express from "express";
import api from "./routes/api";
import path from "path";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('test qq');
});

// app.use("/api", api);

// app.get("/", (req, res) => {
//   // let rootClientPath = path.join(__dirname, '..', 'client');
//   res.send("hejsna");
//   // res.send(path.join(rootClientPath, 'index.html'));
//   // res.sendFile('index.html', {root: rootClientPath});
// });

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    console.log(`App listening on port ${port}`);
  }
});
