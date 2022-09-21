import fs from "fs";
import path from "path";

export function readDB() {
  const filePath = path.join(process.cwd(), "db");
  const str = fs.readFileSync(path.join(filePath, "allscore.json"), "utf-8");
  const todolist = JSON.parse(str);
  return todolist;
}

export function writeDB(score) {
  const filePath = path.join(process.cwd(), "db", "allscore.json");
  const str = JSON.stringify(score);
  fs.writeFileSync(path.join(filePath, "allscore.json"), str, "utf-8");
}

export function delDB(id) {}
