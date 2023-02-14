const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Please enter name of project'
    },
    description: {
      type: String,
      required: 'Please enter description of the project'
    },
    frontTech: {
      type:[String],
      required: 'What technologies did you use for the frontend of this project?'
    },
    backTech: {
      type:[String],
      required: 'What technologies did you use for the backend of this project?'
    },
    website: {
      type: String
    },
    github: {
      type: String
    },
    images: {
      type: []
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Project = model('Project', projectSchema);

module.exports = Project;