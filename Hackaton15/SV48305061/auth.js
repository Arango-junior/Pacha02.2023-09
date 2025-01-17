const passport = require('passport');
const {conexion}=require('./src/database/db')
const  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const FacebookStrategy=require('passport-facebook').Strategy;

require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:4000/google/callback`,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
