const DatArchive = require('node-dat-archive')
const WebDB = require('@beaker/webdb')
const webdb = new WebDB('./webdb-example', {DatArchive})
const initResolvers = require('./resolvers.js')

webdb.define('profiles', {

  // secondary indexes for fast queries (optional)
  index: ['username'],

  // files to index
  filePattern: [
    '/profile.json',
    '/profiles/*.json'
  ]
})

async function loadDB() {
  await webdb.open()
  return initResolvers(webdb)
}

module.exports = webdb;
