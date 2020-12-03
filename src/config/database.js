module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'docker',
  database: process.env.DATABASE || 'sa-2020',
  define: {
    timestamp: true
  }
}
