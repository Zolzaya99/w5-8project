const checkLogin = (req, res, next) => {
    if (!req.oidc.isAuthenticated()) {
        return res.status(401).send({ 
            error: 'You need to be authorized to view this page.',
            login: "https://week5-8project.onrender.com/login"
        });
    }
    next();
};

module.exports = { checkLogin };
