import helpers from './helpers';

export default (req, res, next) => {
    let userInfo;
    switch (req.headers.media) {
        case 'google':
            userInfo = helpers.setGoogleInfo(req.user);
            break;
        case 'facebook':
            userInfo = helpers.setFacebookInfo(req.user);
            break;
        case 'github':
            userInfo = helpers.setGithubInfo(req.user);
            break;
        case 'twitter':
            userInfo = helpers.setTwitterInfo(req.user);
            break;
    }
    res.status(201).json({
        token: req.headers.authorization,
        user: userInfo
    });
    return next();
};