const isAdmin = (req, res, next) => {
    const role = req.cookies.isAdmin
    // console.log(typeof(role))
    if(role === 'false') {
        res.status(403).render('../src/403.ejs')
    return
    }
    next()
}

export default isAdmin