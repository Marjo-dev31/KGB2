const verifyToken = (req,res, next) =>{
    if(req.cookies.jwt){
      const verify = jwt.verfy(req.cookies.jwt, ACCESS_TOKEN_SECRET)
      
      if(!verify){
        res.status(200).render('index.ejs')
      }
      next()
    }

}

export default verifyToken