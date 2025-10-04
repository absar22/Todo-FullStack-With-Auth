const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../model/User')

module.exports = function (passport) {
  // Configure the local authentication strategy
  // This tells Passport HOW to authenticate users with email/password
  passport.use(new LocalStrategy({ 
    usernameField: 'email' // By default Passport looks for 'username', we're using 'email' instead
  }, async (email, password, done) => {
    try {
      // Step 1: Try to find a user with the provided email (case-insensitive)
      const user = await User.findOne({ email: email.toLowerCase() })
      
      // Step 2: Check if user exists in database
      if (!user) {
        // done(error, user, info) - no error, no user found, send message
        return done(null, false, { msg: `Email ${email} not found.` })
      }
      
      // Step 3: Check if user has a password (some users might use OAuth only)
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
      
      // Step 4: Compare the provided password with the hashed password in database
      // This uses the comparePassword method defined in your User model (likely uses bcrypt)
      const isMatch = await user.comparePassword(password)
      
      // Step 5: If password matches, authentication successful!
      if (isMatch) {
        return done(null, user) // No error, user authenticated successfully
      }
      
      // Step 6: Password doesn't match
      return done(null, false, { msg: 'Invalid email or password.' })
      
    } catch (err) {
      // If any error occurs during the process (database error, etc.)
      return done(err)
    }
  }))
  
  // SerializeUser: After successful login, decide what data to store in the session
  // We only store the user's ID to keep the session lightweight
  // This runs when req.login() is called
  passport.serializeUser((user, done) => {
    done(null, user.id) // Store only the user ID in the session
  })

  // DeserializeUser: On every subsequent request, retrieve the full user object
  // Passport takes the ID from the session and fetches the complete user from database
  // This runs automatically on every request where the user is logged in
  passport.deserializeUser(async (id, done) => {
    try {
      // Fetch the full user document from database using the ID
      const user = await User.findById(id)
      done(null, user) // Attach the user object to req.user
    } catch (err) {
      // If user can't be found or database error occurs
      done(err, null)
    }
  })
}