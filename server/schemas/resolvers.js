const Project = require('../models/Project')


const resolvers = {
  Query: {
    projects: async () => {
      return Project.find()
        .select('-__v')
        .sort({ createdAt: -1 })
    },
    project: async (parent, { _id }) => {
      return Project.findOne({ _id });
    },
  },
  Mutation: {
    addProject: async (parent, args) => {
      const project = await Project.create(args)

      return project;
    },
    updateProject: async (parent, args) => {
      const updatedProject = await Project.findOneAndUpdate(
        { _id: args._id },
        { name: args.name, 
          description: args.description, 
          website: args.website,
          github: args.github,
          frontTech: args.frontTech,
          backTech: args.backTech,
          images: args.images
        },
        { new: true }
      )

      return updatedProject
    },
    deleteProject: async (parent, { projectId }) => {
      const deletedProject = Project.findOneAndDelete({_id: projectId})

      return deletedProject;
    }
  }
}

module.exports = resolvers