const { verifyToken } = require("../services/auth");

function checkAuthenticationCookie(cookieName) {
    return async (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (tokenCookieValue) {
            try {
                const userPayload = await verifyToken(tokenCookieValue);
                req.user = userPayload;
            } catch (error) {
                res.clearCookie(cookieName);
            }
        }

        next();
    };
}

module.exports = {checkAuthenticationCookie};