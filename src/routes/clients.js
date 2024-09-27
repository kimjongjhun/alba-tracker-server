const express = require("express");
const router = express.Router();
const supabase = require("../../db");

router.get("/all", async (req, res) => {
  const { data: clients, error } = await supabase.from("clients").select("*");

  res.send({ message: "hit success 2", data: clients, error: error });
});

module.exports = router;
