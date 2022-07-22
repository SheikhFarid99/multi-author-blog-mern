const validator = require('validator');
const adminModel = require('../models/adminModel');
const bcrpty = require('bcrypt');
const jwt = require('jsonwebtoken');
const formidable = require('formidable')
const userModel = require('../models/userModel');
const nodeMiler = require('nodemailer')
const fs = require('fs')

module.exports.admin_login = async (req, res) => {

    const { email, password } = req.body;

    const error = {

    }

    if (email && !validator.isEmail(email)) {
        error.email = "please provide your valid email"
    }
    if (!email) {
        error.email = "please provide your email";
    }
    if (!password) {
        error.password = "please provide your password"
    }

    if (Object.keys(error).length > 0) {
        return res.status(400).json({ errorMessage: error })
    } else {
        try {
            const getAdmin = await adminModel.findOne({ email }).select('+password');
            if (getAdmin) {
                const matchPassword = await bcrpty.compare(password, getAdmin.password);
                if (matchPassword) {
                    const token = jwt.sign({
                        id: getAdmin._id,
                        name: getAdmin.adminName,
                        role: getAdmin.role,
                        image: getAdmin.image
                    }, process.env.SECRET, { expiresIn: '7d' });

                    res.status(200).cookie('blog_token', token, {
                        expires: new Date(
                            Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000
                        ),
                        httpOnly: true
                    }).json({
                        successMessage: 'login successfull',
                        token
                    })

                } else {
                    return res.status(400).json({ errorMessage: { error: "Passwod does not match" } });
                }

            } else {
                return res.status(400).json({ errorMessage: { error: "Email does not exits" } });
            }
        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal server error" } });
        }
    }
}

module.exports.user_register = async (req, res) => {
    const formData = formidable()

    formData.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ errorMessage: { error: "form data parse filed" } });
        } else {
            const { name, email, password } = fields
            const errorData = {}
            if (!name) {
                errorData.name = 'Please provide your name'
            }
            if (!email) {
                errorData.email = 'Please provide your email'
            }
            if (email && !validator.isEmail(email)) {
                errorData.email = 'Please provide your valid email'
            }
            if (!password) {
                errorData.password = 'Please provide your password'
            }
            if (Object.keys(files).length === 0) {
                errorData.image = 'Please provide your image'
            }
            if (Object.keys(errorData).length === 0) {
                try {
                    const getUser = await userModel.findOne({ email })
                    if (getUser) {
                        return res.status(500).json({ errorMessage: { error: "Your email already use" } });
                    } else {

                        const otp = Math.floor(Math.random() * 100000 + 345678)

                        const transporter = nodeMiler.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: process.env.USER_EMAIL,
                                pass: process.env.USER_PASSWORD
                            }
                        })

                        const mailOption = {
                            from: process.env.USER_EMAIL,
                            to: email,
                            subject: ' Sending email mern blog',
                            html: `<div style={padding:"10px"}>
                                <h3>Your otp code ${otp}</h3>
                            </div>`
                        }

                        transporter.sendMail(mailOption, async (error) => {
                            if (error) {
                                return res.status(500).json({ errorMessage: { error: "Somethings else please try again" } });
                            } else {
                                const verifyEmailToken = jwt.sign({
                                    email,
                                    name,
                                    password: await bcrpty.hash(password, 10),
                                    imageInfo: files,
                                    otpCode: otp
                                }, process.env.SECRET, {
                                    expiresIn: process.env.TOKEN_EXP
                                })

                                const option = {
                                    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
                                }
                                res.status(201).cookie('emailVerifyToken', verifyEmailToken, option).json({ successMessage: "Check your email and submit otp" })
                            }
                        })
                    }
                } catch (error) {
                    return res.status(500).json({ errorMessage: { error: "Internal server error" } });
                }
            } else {
                return res.status(400).json({ errorMessage: errorData })
            }
        }
    })
}

module.exports.verify_email = async (req, res) => {
    const { otp } = req.body
    const { emailVerifyToken } = req.cookies
    if (!otp) {
        res.status(404).json({ errorMessage: 'please provide yout otp' })
    } else {
        const { name, email, password, otpCode, imageInfo } = await jwt.verify(emailVerifyToken, process.env.SECRET)

        const imageName = Date.now() + imageInfo.image.originalFilename;

        const disPath = __dirname + `../../../frontend/public/userImage/${imageName}`

        try {
            if (parseInt(otp) !== otpCode) {
                res.status(404).json({ errorMessage: { error: 'please provide yout valid otp' } })
            } else {
                fs.copyFile(imageInfo.image.filepath, disPath, async (err) => {
                    if (!err) {
                        const createUser = await userModel.create({
                            userName: name,
                            email,
                            loginMethod: 'manually',
                            password,
                            image: `http://localhost:3000/userImage/${imageName}`
                        })

                        const token = jwt.sign({
                            id: createUser._id,
                            email: createUser.email,
                            name: createUser.userName,
                            image: createUser.image,
                            role: createUser.role,
                            loginMethod: createUser.loginMethod,
                            accessStatus: createUser.accessStatus,
                            createdAt: createUser.createdAt
                        }, process.env.SECRET, {
                            expiresIn: process.env.TOKEN_EXP
                        })

                        const option = {
                            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                        }

                        res.clearCookie('emailVerifyToken')
                        res.status(201).cookie('blog_token', token, option).json({
                            successMessage: "Your register successfull",
                            token
                        })

                    }
                })
            }
        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal server error" } });
        }
    }
}

module.exports.user_login = async (req, res) => {
    const { email, password } = req.body;

    const error = {

    }

    if (email && !validator.isEmail(email)) {
        error.email = "please provide your valid email"
    }
    if (!email) {
        error.email = "please provide your email";
    }
    if (!password) {
        error.password = "please provide your password"
    }

    if (Object.keys(error).length > 0) {
        return res.status(400).json({ errorMessage: error })
    } else {
        try {
            const getUser = await userModel.findOne({ email }).select('+password');
            if (getUser) {
                const matchPassword = await bcrpty.compare(password, getUser.password);
                if (matchPassword) {
                    const token = jwt.sign({
                        id: getUser._id,
                        email: getUser.email,
                        name: getUser.userName,
                        image: getUser.image,
                        role: getUser.role,
                        loginMethod: getUser.loginMethod,
                        accessStatus: getUser.accessStatus,
                        createdAt: getUser.createdAt
                    }, process.env.SECRET, {
                        expiresIn: process.env.TOKEN_EXP
                    })

                    const option = {
                        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                    }
                    res.status(201).cookie('blog_token', token, option).json({
                        successMessage: "Your log successfull",
                        token
                    })

                } else {
                    return res.status(400).json({ errorMessage: { error: "Passwod does not match" } });
                }

            } else {
                return res.status(400).json({ errorMessage: { error: "Email does not exits" } });
            }
        } catch (error) {
            return res.status(500).json({ errorMessage: { error: "Internal server error" } });
        }
    }
}