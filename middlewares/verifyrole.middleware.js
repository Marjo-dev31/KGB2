const isAdmin = (req, res, next) => {
    const role = req.cookies.isAdmin
    if(role === 'false') {
       res.status(403).render('../src/errors/403.ejs')
       return
    }
    next()
}

export default isAdmin