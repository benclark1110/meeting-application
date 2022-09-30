require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getCases = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM public.cases ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const createCase = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, description } = body
    pool.query('INSERT INTO cases (name, description) VALUES ($1, $2) RETURNING *', [name, description], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Case successfully created`)
    })
  })
}

module.exports = {
  getCases,
  createCase
}