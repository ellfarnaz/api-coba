const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let students = [
  { name: "Alice", nim: "123456789" },
  { name: "Bob", nim: "987654321" },
  { name: "Charlie", nim: "192837465" },
];

app.get("/students", (req, res) => {
  res.json(students);
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/students", (req, res) => {
  const { name, nim } = req.body;
  const newStudent = { name, nim };
  students.push(newStudent);
  res.json(newStudent);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
