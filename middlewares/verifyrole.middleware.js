const isAdmin = (req, res, next) => {
    const isAdmin = req.cookies.isAdmin
    if(isAdmin === 'false') {
       res.status(403).render('../src/errors/403.ejs')
       return
    }
    next()
}

export default isAdmin