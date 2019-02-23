const pgp = require('pg-promise')();
pgp.pg.defaults.ssl = true;

const db = pgp('postgres://mbsvmpwnwzkdam:c49e634ab69c111d3a2402a32bc944a28437d0e6aa0fabf3569cc4e7655680cd@ec2-50-17-193-83.compute-1.amazonaws.com:5432/d5mijhl06l39lt');

if(!db) {
    console.log("SHAME! Follow the intructions and set your DATABASE_URL correctly");
    process.exit(1);
}

module.exports = db;