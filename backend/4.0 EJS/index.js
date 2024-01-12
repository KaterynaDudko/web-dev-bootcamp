import express from "express";

const app = express();
const port = 3000;

let dayType = "";
let advice = "";

function getDay(req, res, next) {
  const today = new Date();
  const dayNum = today.getDay();
  dayType = dayNum > 1 ? "weekday" : "weekend";
  advice =
    dayType === "weekday"
      ? "it's time to work hard"
      : "it's time to have some fun";
  next();
}

app.use(getDay);

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType,
    advice,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
