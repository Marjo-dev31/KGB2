const verifyToken = (req,res, next) =>{
    if(req.cookies.jwt){
      const verify = jwt.verify(req.cookies.jwt, ACCESS_TOKEN_SECRET)
      
      if(!verify){
        res.status(200).render('index.ejs')
      }
      next()
    } else{
      res.status(500).render('500.ejs')
    }
    
}

export default verifyToken