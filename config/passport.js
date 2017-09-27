import User from './../models/user';
import passport from 'passport';
import passportJWT from './passport.jwt';
import { login, register } from './passport.local';
import passportGoogle from './passport.google';
import passportFacebook from './passport.facebook';
import passportGithub from './passport.github';
import passportTwitter from './passport.twitter';

passport.use(passportJWT);
passport.use('register', register);
passport.use('login', login);
passport.use(passportGoogle);
passport.use(passportFacebook);
passport.use(passportGithub);
passport.use(passportTwitter);

export default passport;