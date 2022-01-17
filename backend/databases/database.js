const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

const pool = new Pool({
  user: 'utmgen_user',
  password: process.env.DB_PASSWORD,
  host: '192.168.125.90',
  port: 32829,
  database: 'utmgen'
});

module.exports = pool;