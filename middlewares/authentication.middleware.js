import jwt from  'jsonwebtoken';


const createJWT = (mail, password, res, next)=>{
    try {
       const token = jwt.sign({mail,password}, process.env.ACCESS_TOKEN_SECRET,{expires: '24h'});
   res.cookie('jwt', token, {
    httpOnly: true,
    // secure:true,
    sameSite: Strict
   })
   next() 
    } catch(error){
        res.status(500).render('../src/500.ejs', error.message)
    }
   
} 

export default createJWT;