const pgp = require('pg-promise')();
pgp.pg.defaults.ssl = true;

const db = pgp('postgres://lapabxcqafqmfn:a7d0d096e991558d05662851b6b82cbc3de4366beb5f173214427f63abf70832@ec2-54-83-17-151.compute-1.amazonaws.com:5432/d10e2q6lc36qms');

module.exports = db;