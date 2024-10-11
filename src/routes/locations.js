const express = require("express");
const router = express.Router();
const supabase = require("../../db");

/**
 * GET routes
 */

router.get("/all", async (req, res) => {
  const { data: locations, error } = await supabase
    .from("locations")
    .select("*");

  res.send({ message: "hit success 2", data: locations, error: error });
});

module.exports = router;
