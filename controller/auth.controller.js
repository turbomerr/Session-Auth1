import bcyrpt from "bcryptjs"
import { User } from "../models/User.js"


export const getRegister = (req, res) => {
    res.render("register")
}

export const getLogin = (req, res) => {
    res.render("login");
}

export const getDashboard = (req, res) => {
    res.render("dashboard")
}

export const postRegister = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        const userAlreadyExist = await User.findOne({ email })

        if (userAlreadyExist) {
            res.redirect("/api/user/login")
        }
        const hashedPassword = await bcyrpt.hash(password, 10)

        const user = new User({
            username,
            email,
            password: hashedPassword
        })
        await user.save()

        res.redirect("/api/user/login")

    } catch (error) {
        console.log(error)
    }

}

export const postLogin = async (req, res) => {

    try {

        const { email, password } = req.body;

        const userAlreadyExist = await User.findOne({ email })

        if (!userAlreadyExist) {
            return res.redirect("/api/user/register")
        }

        const isMatch = await bcyrpt.compare(password, userAlreadyExist.password)

        if (!isMatch) {
            console.log("password is not match")
            return res.redirect("/login")
        }
        req.session.isAuth = true

        res.redirect("/api/user/dashboard")

    } catch (error) {
        console.log(error)
    }

}

export const logOut = (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err
        res.redirect("/")
    })
}