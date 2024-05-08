import express from "express";
import mysql from "mysql"; // eslint-disable-line
import cors from "cors";
import jwt from "jsonwebtoken"; // eslint-disable-line
import bcrypt from "bcrypt"; // eslint-disable-line
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signup",
// });

app.listen(8081, () => {
  console.info("Server is running on port 8081.");
});
