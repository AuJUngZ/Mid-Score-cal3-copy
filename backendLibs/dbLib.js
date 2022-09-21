import fs from "fs";
import path from "path";

export function readDB() {
  const str = fs.readFileSync(
    path.join(process.cwd(), "db", "allscore.json"),
    "utf-8"
  );
  const todolist = JSON.parse(str);
  return todolist;
}

export function writeDB(score) {
  const str = JSON.stringify(score);
  const file = path.join(process.cwd(), "db", "allscore");
  fs.writeFileSync(file, str, "utf-8");
}

export function delDB(id) {}
