const { Schema, model } = require('mongoose');

const techSchema = new Schema(
  {
    frontTech: {
      type:[String],
      required: 'What technologies did you use for the frontend of this project?'
    },
    backTech: {
      type:[String],
      required: 'What technologies did you use for the backend of this project?'
    },
    project: {
      type: String
    }
  },
  {
    toJson: {
      getters: true,
      virtuals: true
    }
  }
)

const Tech = model('Tech', techSchema)

module.exports = Tech;