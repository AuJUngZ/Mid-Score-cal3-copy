import fs from "fs";

export function readDB() {
  const srt = fs.readFileSync("./Db/score.json", "utf-8");
  const todolist = JSON.parse(srt);
  return todolist;
}

export function writeDB(score) {
  const srt = JSON.stringify(score);
  fs.writeFileSync("./Db/score.json", srt, "utf-8");
}

export function delDB(id) {}
