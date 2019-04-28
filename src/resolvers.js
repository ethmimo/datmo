
const initResolvers = webdb => {
  const resolvers = {
    Query: {
      async profile(parent, args, context) {
        await webdb.open()
        const profile = await webdb.profiles.get('username', args.username)
        return Object.entries(profile);
      },
      async sources(parent, args, context) {
        await webdb.open()
        const urls = await webdb.listSources()
        return urls;
      },
      async index(parent, args, context) {
        await webdb.open()
        await webdb.indexArchive(args.id)
        const urls = await webdb.listSources()
        return urls;
      }
    },
    Profile: {
      id(profile) {
        return profile.getRecordURL();
      },
      username(profile) {
        return profile.username;
      }
    }
  }

  return resolvers;
};

module.exports = setupResolvers;
