let mongoose = require('mongoose')
let Comment = require('./comment')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let Subcomment = require('./subComment')
let Post = require('./post')

let subComment = new Schema({
  username: { type: String, required: true },
  timeStamp: { type: String, required: true },
  comment: { type: ObjectId, ref: "Comment", required: true },
  body: { type: String, required: true },
  vote: { type: Number }
}, { timestamps: true })

let comment = new Schema({
  username: { type: String, required: true },
  post: { type: ObjectId, ref: "Post", required: true },
  description: { type: String, required: true },
  img: { type: String },
  vote: { type: Number, default: 0 },
  subComments: [subComment]
}, { timestamps: true })



// comment.pre("remove", function (next) {
//   Subcomment.deleteMany({ post: this._id })
//     .then(() => next())
//     .catch(err => next(err))
// })

module.exports = mongoose.model("Comment", comment)