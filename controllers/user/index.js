import requireAuth from './requireAuth';
import register from './register';
import login from './login';
import forgotPassword from './forgotPassword';
import verifyToken from './verifyToken';
import getMediaLogin from './getMediaLogin';
import google from './google';
import facebook from './facebook';
import github from './github';
import twitter from './twitter';

export default {
    requireAuth: requireAuth,
    register: register,
    login: login,
    forgotPassword: forgotPassword,
    verifyToken: verifyToken,
    getMediaLogin: getMediaLogin,
    googleLogin: google.googleLogin,
    googleLoginCb: google.googleLoginCb,
    facebookLogin: facebook.facebookLogin,
    facebookLoginCb: facebook.facebookLoginCb,
    githubLogin: github.githubLogin,
    githubLoginCb: github.githubLoginCb,
    twitterLogin: twitter.twitterLogin,
    twitterLoginCb: twitter.twitterLoginCb
};