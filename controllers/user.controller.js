import User from '../models/user.model.js';
import {hash} from 'bcrypt';

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
        const hashPassword = await hash(req.body.password, 10);
        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mail: req.body.mail,
            isAdmin: req.body.isAdmin,
            password: hashPassword,
        });
            res.status(200).send({user});
    } catch(error) {
        res.status(500).render('../src/500.ejs', error.message);
    }
};


export const updateUser = async (req,res)=>{
    try {
    const hashPassword = await hash(req.body.password, 10);
    const user = await User.findByIdAndUpdate(req.params.id, {$set:{
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        isAdmin: req.body.isAdmin,
        password: hashPassword
    }}, {new:true});
        if(!user){
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
        if(!user){
            res.status(200).send(`User by ${req.params.id} no found`)
            return
        }
        res.status(200).send('User deleted!')
    } catch(error) {
        res.status(500).render('../src/500.ejs') 
    }
}


export const getUserById = async (req,res)=> {
   const user = await User.findById(req.params.id);
   res.send({user})
}