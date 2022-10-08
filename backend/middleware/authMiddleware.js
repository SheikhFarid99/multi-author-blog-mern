const jwt = require('jsonwebtoken');
module.exports.admin_middleware = async (req, res, next) => {

    const { blog_token } = req.cookies;

    if (!blog_token) {
        res.status(409).json({ errorMessage: { error: 'Please login first' } })
    } else {
        const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
        req.adminId = deCodeToken.id;
        req.adminName = deCodeToken.name;
        req.role = deCodeToken.role
        next();
    }
}

module.exports.user = async (req, res, next) => {
    const { blog_token } = req.cookies;
    if (!blog_token) {
        req.userId = ""
        req.role = ""
        req.userName = ""
        next()
    } else {
        const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
        req.userId = deCodeToken.id;
        req.userName = deCodeToken.name;
        req.role = deCodeToken.role
        next();
    }
}
module.exports.auth_user = async (req, res, next) => {
    const { blog_token } = req.cookies;
    if (!blog_token) {
        res.status(404).json({ errorMessage: { error: 'Please login first' } })
    } else {
        const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
        if (deCodeToken.role === 'user' && deCodeToken.accessStatus === 'unblock') {
            req.userId = deCodeToken.id
            req.role = deCodeToken.role
            req.userName = deCodeToken.name
            next()
        } else {
            res.status(404).json({
                errorMessage: {
                    error: 'you can not access'
                }
            })
        }
    }
}

module.exports.auth_sub_admin = async (req, res, next) => {
    const { blog_token } = req.cookies;
    if (!blog_token) {
        res.status(404).json({ errorMessage: { error: 'Please login first' } })
    } else {
        const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
        if (deCodeToken.role === 'sub admin' && deCodeToken.accessStatus === 'unblock') {
            req.adminId = deCodeToken.id;
            req.adminName = deCodeToken.name;
            req.role = deCodeToken.role
            next()
        } else if (deCodeToken.role === 'admin') {
            req.adminId = deCodeToken.id;
            req.adminName = deCodeToken.name;
            req.role = deCodeToken.role
            next()
        }
        else {
            res.status(404).json({
                errorMessage: {
                    error: 'you can not access'
                }
            })
        }
    }
}
