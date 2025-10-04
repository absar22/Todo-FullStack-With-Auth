const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String
})

// Password hash middleware 
UserSchema.pre('save', async function save(next) {
  const user = this
  if (!user.isModified('password')) { 
    return next() 
  }
  
  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    next()
  } catch (err) {
    next(err)
  }
})

// Helper method for validating user's password - updated to return Promise
UserSchema.methods.comparePassword = function comparePassword(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)