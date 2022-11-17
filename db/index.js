const pgp = require('pg-promise')();
const userPasswordDatabase = `${encodeURIComponent("Test#PaSS2")}@`;
const connectionString = 
    "postgresql://testuser:"+ userPasswordDatabase + "65.1.169.98:5432/testdb";

const db  = pgp(connectionString);
module.exports = db;
