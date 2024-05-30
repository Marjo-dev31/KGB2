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
res.status(200).render('../src/backoffice', {missions: results})
})
};


export const addMission = (req, res) => {
console.log(req.body)
database.query(QUERYMISSIONS.CREATEMISSION, Object.values(req.body),(error, results)=>{
    if(!results){
        res.status(500).render('../src/500.ejs')
    }
    const mission = req.body
    res.status(200).send({mission})
})
}