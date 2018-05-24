import express from "express";
import config from "./config";
import serverRender from "./serverRender";

const app = express();

app.use(express.static("dist"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const content = serverRender();
  res.render("index", { initContent: content });
});

app.on("listening", function () {
  console.log("ok, server is running on port: ${config.port}");
});

app.listen(config.port, () => {
  console.log(`I'm working on port: ${config.port}`);
});
