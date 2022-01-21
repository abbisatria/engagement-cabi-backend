const Guest = require('./model')
const response = require('../../helpers/response')
const sendEmail = require('../../helpers/sendEmail')

module.exports = {
  createGuest: async (req, res) => {
    try {
      const payload = req.body

      const guest = await Guest(payload)
      await guest.save()

      req.socket.emit('list', 'test')

      if (payload.email) {
        sendEmail(payload.email, 'Invitation Engagement Abbi ❤️ Tasya', 'http://localhost:3000')
      }

      return response(res, 200, true, 'Konfirmasi Kehadiran Berhasil')
    } catch (err) {
      return response(res, 400, false, `${err.message || 'Bad Request'}`)
    }
  },
  getListGuest: async (req, res) => {
    try {
      const guest = await Guest.find({ ucapan: { $ne: '' } }).sort({ updatedAt: -1 })
      return response(res, 200, true, 'List Guest', guest)
    } catch (err) {
      return response(res, 400, false, `${err.message || 'Bad Request'}`)
    }
  }
}
