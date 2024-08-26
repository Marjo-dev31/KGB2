import database from '../db/mysql.js';
import QUERYMISSIONS from '../query/mission.query.js';

export const getMissionsDetails = (req, res) => {
database.query(QUERYMISSIONS.SELECT_MISSIONS_DETAILS, (err,results)=>{
    if(err){
      return res.status(500).render('../src/errors/500.ejs')
    }
    if(!results) {
      return res.status(200).render('../src/errors/403.ejs')
}
   return res.status(200).render('../src/views/index.ejs', {missions: results})
})
};