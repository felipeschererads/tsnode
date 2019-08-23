import { Schema, model } from 'mongoose'

const USerSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, { timestamps: true })

export default model('User', USerSchema)
