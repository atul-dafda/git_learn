const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST"],
		credentials: true,
		"Access-control-allow-Headers": "Origin, Content-Type, Accept",
	})
);

const db = mysql.createConnection({
	host: "localhost",
	database: "bloom-react",
	user: "root",
	password: "",
});

app.get("/site_setting/", (res) => {
	console.log("set");
	db.execute("select * from site_setting"),
		[],
		(err, res) => {
			console.log(res);
			console.log(err);
			res.json({ data: res.data });
		};
});

app.post("/contact/", (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const mobile = req.body.mobile;
	const message = req.body.message;

	db.execute(
		"Insert into contact_form(name,email,mobile,message) values (?,?,?,?)",
		[name, email, mobile, message],
		(err, result) => {
			res.json({ message: "Insert Successfull" });
		}
	);
});

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(`What's your name?`, (name) => {
	console.log(`Hi ${name}!`);
	app.listen(port, () => {
		console.log(`Server is running on ${port}`);
	});
	readline.close();
});

// const fs = require("fs");
// const content = "Some content!";
// fs.writeFile("/Users/joe/test.txt", content, (err) => {
// 	if (err) {
// 		console.error(err);
// 	}
// 	// file written successfully
// });
