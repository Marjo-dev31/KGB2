import database from '../db/mysql.js';
import QUERYMISSIONS from '../query/mission.query.js';

export const getMissions = (req, res) => {
database.query(QUERYMISSIONS.SELECT_MISSIONS, (err,results)=>{
    if(err){
        return res.status(500).render('../src/errors/500.ejs')
    }
    if(!results) {
        return  res.status(200).send('No results')
}
        return res.status(200).render('../src/backoffice.ejs', {missions: results})
})
};


export const addMission = (req, res) => {
database.query(QUERYMISSIONS.CREATE_MISSION, Object.values(req.body),(error, results)=>{
    if(!results){
       return res.status(500).render('../src/errors/500.ejs')
    }
    const mission = req.body
       return res.status(200).send({mission})
})
};

export const updateMission = (req,res) => {
database.query(QUERYMISSIONS.SELECT_MISSIONS, [req.params.id], (error, results)=> {
    if(!results[0]){
       return res.status(200).render('../src/errors/404.ejs')
    }
    database.query(QUERYMISSIONS.UPDATE_MISSION, [...Object.values(req.body), req.params.id], (err,results)=>{
       if(err){
         return res.status(500).render('../src/errors/500.ejs')
        }
        return res.status(200).send({...req.body}) 
    })
} )
}

export const deleteMission = (req,res) => {
    database.query(QUERYMISSIONS.DELETE_MISSION, [req.params.id], (error, results)=>{
        if(error){
          return res.status(500).render('../src/errors/5OO.ejs')
        }
        return res.status(200).send('Mission deleted')
    })
}