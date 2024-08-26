import bcrypt from 'bcrypt';
import User from '../models/user.model.js'

export const login = async (req,res)=>{
 try {
  const user = await User.findOne({mail: req.body.mail})
    if(!user){
        res.status(200).send(`User not found`)
        return
    };
  const isAdmin = user.isAdmin
    res.cookie('isAdmin', isAdmin, {
        httpOnly: true
    });
  const passwordIsValid = await bcrypt.compare(req.body.password, user.password)
   if(!passwordIsValid){
    
     res.status(200).send('Please verify your credentials!')
     return 
    }
    res.status(200).render('../src/views/backoffice.ejs')
    
 } catch(error) {
    res.status(500).render('../src/errors/500.ejs', error.message)
 }
}