import fs from "fs";

export function readDB() {
  const fs = require("fs");
  const srt = fs.readFileSync("./db/allscore.json", "utf-8");
  const todolist = JSON.parse(srt);
  return todolist;
}

export function writeDB(score) {
  const fs = require("fs");
  const srt = JSON.stringify(score);
  fs.writeFileSync("./db/allscore.json", srt, "utf-8");
}

export function delDB(id) {}
