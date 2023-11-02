const logInandOut = (req, res) => {
    res.send(
        req.oidc.isAuthenticated()
        ? `Logged In as ${req.oidc.user.name}`
        : 'Logged Out'
    );
};

module.exports = { logInandOut };