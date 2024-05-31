import database from '../db/mysql.js';
import QUERYMISSIONS from '../query/mission.query.js';

export const getMissions = (req, res) => {
database.query(QUERYMISSIONS.SELECT_MISSIONS, (err,results)=>{
    if(err){
        res.status(500).render('../src/500.ejs')
    }
if(!results) {
    res.status(200).send('No results')
}
res.status(200).render('../src/backoffice.ejs' ,{missions: results})
})
};


export const addMission = (req, res) => {
database.query(QUERYMISSIONS.CREATE_MISSION, Object.values(req.body),(error, results)=>{
    if(!results){
        res.status(500).render('../src/500.ejs')
    }
    const mission = req.body
    res.status(200).send({mission})
})
};

export const updateMission = (req,res) => {
database.query(QUERYMISSIONS.SELECT_MISSIONS, [req.params.id], (error, results)=> {
    if(!results[0]){
        res.status(200).render('404')
    }
    
    database.query(QUERYMISSIONS.UPDATE_MISSION, [...Object.values(req.body), req.params.id], (err,results)=>{
       if(err){
          res.status(500).render('../src/500.ejs')
        }
        res.status(200).send({...req.body}) 
    })
} )
}

export const deleteMission = (req,res) => {
    database.query(QUERYMISSIONS.DELETE_MISSION, [req.params.id], (error, results)=>{
        if(error){
            res.status(500).render('../src/5OO.ejs')
        }
        res.status(200).send('Mission deleted')
    })
}