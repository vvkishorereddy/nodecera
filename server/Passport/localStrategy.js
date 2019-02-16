const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

userModel = require("../Models/User");

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      console.log("login");
      userModel.findOne(
        {
          email: email
        },
        function(err, user) {
          if (err) {
            return done(err);
          }

          if (!user) {
            return done(null, false);
          }

          if (
            user.password != userModel.checkPassword(password, user.password)
          ) {
            console.log(1111111);
            return done(null, false);
          }
          return done(null, user);
        }
      );
    }
  )
);

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, email, password, done) {
      console.log("signup");

      let user = {
        email: email,
        password: password,
        fullname: req.body.fullname,
        username: req.body.username,
        user_type: req.body.user_type
      };
      userModel.create(user, (err, data) => {
        console.log(err);
        return done(null, data);
      });
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: "top_secret",
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter("secret_token")
    },
    (token, done) => {
      return done(null, token.user);
    }
  )
);
