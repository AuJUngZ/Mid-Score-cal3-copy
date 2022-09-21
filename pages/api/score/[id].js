import React from "react";
import { readDB, writeDB } from "../../../backendLibs/dbLib";

export default function Edit(req, res) {
  if (req.method == "DELETE") {
    const scores = readDB();
  }
}
