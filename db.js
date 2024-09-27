const { createClient } = require("@supabase/supabase-js");

const db_url = process.env.DB_URL;
const db_key = process.env.DB_KEY;

const supabase = createClient(db_url, db_key);

module.exports = supabase;
