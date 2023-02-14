const Project = require('../models/Project')


const resolvers = {
  Query: {
    projects: async () => {
      return Project.find()
        .select('-__v')
    },
    project: async (parent, { _id }) => {
      return Project.findOne({ _id });
    },
  }
}