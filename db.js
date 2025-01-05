import pg from 'pg'

const { Client } = pg

export const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'vivi2004',
  database: 'ucabair'
})

client.connect()

// client.query('SELECT * FROM persona_natural LIMIT 10', (err, res) => {
//   if (err) {
//     console.log(err.message)
//   } else {
//     console.log(res.rows)
//   }
//   client.end()
// })
