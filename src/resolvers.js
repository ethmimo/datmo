const webdb = require('./db.js')

const initResolvers = () => {
  const resolvers = {
    Query: {
      async profile(parent, args, context) {
        await webdb.open()
        const profile = await webdb.profiles.get('username', args.username)
        return profile;
      },
      async sources(parent, args, context) {
        await webdb.open()
        const urls = await webdb.listSources()
        return urls;
      }
    },
    Mutation: {
      async index(parent, args, context) {
        await webdb.open()
        await webdb.indexArchive(args.id)
        const urls = await webdb.listSources()
        return urls;
      }
    },
    Profile: {
      username: (root) => root.username,
      bio: (root) => root.bio,
    }
  }

  return resolvers;
};

module.exports = initResolvers;
