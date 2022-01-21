const mongoose = require('mongoose')

const guestSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Fullname harus diisi']
  },
  email: {
    type: String,
    require: [true, 'Email harus diisi']
  },
  avatar: {
    type: Number
  },
  ucapan: {
    type: String,
    require: [true, 'Ucapan harus diisi']
  }
}, { timestamps: true })

module.exports = mongoose.model('Guest', guestSchema)
