export const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next()
    }else{
        res.redirect("/api/user/login")
    }
}