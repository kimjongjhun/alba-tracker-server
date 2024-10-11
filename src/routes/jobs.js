const express = require("express");
const router = express.Router();
const supabase = require("../../db");

/**
 * POST routes
 */

router.post("/new", async (req, res) => {
  const { body: newJob } = req;

  const { data, error } = await supabase.from("jobs").insert(newJob);

  if (error) {
    res.status(500).send(error);
  }

  res.status(200).send(data);
});

module.exports = router;
