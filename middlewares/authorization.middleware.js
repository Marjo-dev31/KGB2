import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) =>{
  const token = req.cookies.jwt
    if(token){
      const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      
      if(!verify){
        res.status(500).render('../src/errors/500.ejs')
        return
      }
  next()    
}
}

export default verifyToken