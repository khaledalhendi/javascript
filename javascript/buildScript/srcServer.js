//@ts-check

import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
	require("webpack-dev-middleware")(compiler, {
		publicPath: config.output.publicPath
	})
);

app.get("/", function(req, res) {
	res.sendfile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function(req, res) {
	res.json([
		{ id: 1, firstName: "Bob" },
		{ id: 2, firstName: "Tammy" },
		{ id: 3, firstName: "Bingo" }
	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open("http://localhost:" + port);
	}
});
