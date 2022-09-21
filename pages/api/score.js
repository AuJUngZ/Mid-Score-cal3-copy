import { readDB, writeDB } from "../../backendLibs/dbLib";
export default function allscore(req, res) {
  if (req.method == "GET") {
    const scores = readDB();
    return res.status(200).json({ ok: true, score: scores });
  } else if (req.method == "POST") {
    const scores = readDB();
    const newScore = req.body;
    scores.push(newScore);
    writeDB(scores);
    return res.status(200).json({ ok: true });
  }
}
