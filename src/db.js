const DatArchive = require('node-dat-archive')
const WebDB = require('@beaker/webdb')
const webdb = new WebDB('./webdb-example', {DatArchive})

webdb.define('profiles', {

  // secondary indexes for fast queries (optional)
  index: ['username'],

  // files to index
  filePattern: [
    '/profile.json',
    '/profiles/*.json'
  ]
})

module.exports = webdb;
