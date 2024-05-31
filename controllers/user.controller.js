import User from '../models/user.model.js'


export const getUsers = async (req,res)=>{
    try {
        const users = await User.find()
        if(!users[0]){
        res.status(200).send('No user found!')
        return
        } 
        res.status(200).send({users})
    } catch(error) {
        res.status(500).render('../src/500.ejs', error.message)
    }
};

export const addUser = async (req,res)=>{
    try {
        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mail: req.body.mail,
            isAdmin: req.body.isAdmin,
            password: '',
        });
            res.status(200).send({user})
    } catch(error) {
        res.status(500).render('../src/500.ejs', error.message)
    }
};


export const updateUser = async (req,res)=>{
    try {
     const user = await User.findByIdAndUpdate({_id:req.params.id},{
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        isAdmin: req.body.isAdmin,
    });
    if(!user[0]){
        res.status(200).send(`User by ${req.params.id} no found`)
        return
    }
    res.status(200).send({user})
    } catch(error) {
        res.status(500).render('../src/500.ejs')
    }
};


export const deleteUser = async (req,res) => {
    try {
       const user = await User.findByIdAndDelete({_id: req.params.id})
        if(!user[0]){
            res.status(200).send(`User by ${req.params.id} no found`)
            return
        }
        res.status(200).send('User deleted!')
    } catch(error) {
        res.status(500).render('../src/500.ejs') 
    }
}