const { Tech } = require('../models');
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
    tech: async (parent, { project }) => {
      const params = project? { project } : {};
      return Tech.find(params).sort({ createdAt: -1 });
    },
  },
  Mutation: {
    addProject: async (parent, args) => {
      const project = await Project.create(args)

      return project;
    },
    addTech: async (parent, args) => {
      const tech = await Tech.create(args);

      return tech;
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
    },
  }
}

module.exports = resolvers