import express from 'express';
import userController from './../controllers/user/index';

export default (app) => {
    const apiRoutes = express.Router();
    const authRoutes = express.Router();

    app.use('/api', apiRoutes);

    //=========================
    // Auth Routes
    //=========================
    apiRoutes.use('/auth', authRoutes);

    // POST /api/auth/register
    authRoutes.post('/register', userController.register);
    // POST /api/auth/login
    authRoutes.post('/login', userController.login);
    // POST /api/auth/forgot-password
    authRoutes.post('/forgot-password', userController.forgotPassword);
    // POST /api/auth//reset-password/:token
    authRoutes.post('/reset-password/:token', userController.verifyToken);

    // GET /api/auth/google
    authRoutes.get('/google', userController.googleLogin);
    authRoutes.get('/google/callback', userController.googleLoginCb);
    // GET /api/auth/facebook
    authRoutes.get('/facebook', userController.facebookLogin);
    authRoutes.get('/facebook/callback', userController.facebookLoginCb);
    // GET /api/auth/github
    authRoutes.get('/github', userController.githubLogin);
    authRoutes.get('/github/callback', userController.githubLoginCb);
    // GET /api/auth/twitter
    authRoutes.get('/twitter', userController.twitterLogin);
    authRoutes.get('/twitter/callback', userController.twitterLoginCb);

    // GET /api/auth/loginSuccess
    authRoutes.get('/loginSuccess', userController.requireAuth, userController.getMediaLogin);

};
