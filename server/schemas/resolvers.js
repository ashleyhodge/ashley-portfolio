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
    updateTech: async (parent, args) => {
      const updateTech = await Tech.findOneAndUpdate(
        {_id: '63fd40455922a8f575e3997b' },
        { $push: {frontTech: args.frontTech, backTech: args.backTech}},
        { new: true } 
      )
      return updateTech;
    },
    deleteProject: async (parent, { projectId }) => {
      const deletedProject = Project.findOneAndDelete({_id: projectId})

      return deletedProject;
    },
    deleteTech: async (parent, args) => {
      const deleteTech = await Tech.findOneAndUpdate(
        {_id: '63fd40455922a8f575e3997b' },
        { $pull: {frontTech: args.frontTech, backTech: args.backTech}},
        { new: true } 
      )
      return deleteTech;
    },
  }
}

module.exports = resolvers