const checkLogin = (req, res, next) => {
    if (!req.oids.isAuthenticated()) {
        return res.status(401).send({ 
            error: 'Need authorization to login',
            login: "https://week5-8project.onrender.com/login"
        });
    }
 next();
};

module.exports = {checkLogin}; 