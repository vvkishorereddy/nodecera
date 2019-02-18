const LocalStrategy = require("passport-local").Strategy;
//const  JwtStrategy = require("passport-jwt").Strategy;
const { Strategy, ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("../Config");

userModel = require("../Models/User");

const JwtStrategy = Strategy;

module.exports = function(passport) {
  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
      function(email, password, done) {
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
              //user.password != userModel.checkPassword(password, user.password)
              user.password != password
            ) {
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
        secretOrKey: JWT_SECRET,
        //jwtFromRequest: ExtractJwt.fromUrlQueryParameter("secret_token")
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      },
      (token, done) => {
        console.log(token, 888);
        return done(null, token.user);
      }
    )
  );
};
