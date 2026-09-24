const { SignJWT, jwtVerify } = require('jose');

const secretPhrase = new TextEncoder().encode('secretphraseforsecrettokenforsecrettoken');

async function createTokenForUser(user) {
    const payload = {
        _id : user._id,
        fullName : user.fullName,
        email : user.email
    }

    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .sign(secretPhrase);
}

async function verifyToken(token) {
    const { payload } = await jwtVerify(token, secretPhrase);
    return payload;
}

module.exports = {createTokenForUser, verifyToken};