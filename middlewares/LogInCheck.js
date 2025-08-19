const jwt = require('jsonwebtoken');
const secretkey = process.env.JWT_SECRET;

let isLoggedIn = function (req, res, next) {
    // Get the token from the cookies
    const token = req.cookies.token;

    // Check if the token exists. If not, redirect to the sign-in page.
    if (!token) {
        return res.redirect("/signIn");
    }

    try {
        // If the token exists, verify it and attach the user data to the request
        const data = jwt.verify(token, secretkey);
        req.user = data;
        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // If the token is invalid (e.g., expired or tampered with),
        // redirect the user and clear the invalid cookie
        res.clearCookie('token');
        return res.redirect("/signIn");
    }
}

module.exports = isLoggedIn;