import express from "express";
const app = express();
const port = 3000;

app.get("/", (rec, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.get("/contact", (rec, res) => {
  res.send("<h1>Contact me Page</h1>");
});

app.get("/about", (rec, res) => {
  res.send("<h1>About me Page</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
