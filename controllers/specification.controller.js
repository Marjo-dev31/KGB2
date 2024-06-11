import database from '../db/mysql.js'
import {QUERYCOUNTRY} from '../query/specification.query.js'
import {QUERYSPECIALITY} from '../query/specification.query.js'

const checkCountry = (req, res) => {
   let agentCountry=[];

   database.query(QUERYCOUNTRY.SELECT_COUNTRY_AGENT, [req.body.id_agent], (err,results)=>{
     agentCountry = results
   });

   let targetCountry=[]; 
   database.query(QUERYCOUNTRY.SELECT_COUNTRY_TARGET, [req.body.id_target], (err,results)=>{
      targetCountry = results
   });

   let contactCountry=[];
   database.query(QUERYCOUNTRY.SELECT_COUNTRY_CONTACT, [req.body.id_contact], (err,results)=>{
      console.log(results,'toto')
      contactCountry = results 
   });

   let hideoutCountry = []
   database.query(QUERYCOUNTRY.SELECT_COUNTRY_HIDEOUT, [req.body.id_hideout], (err,results)=>{
      hideoutCountry = results 
   });

   let agentSpeciality = []
   database.query(QUERYSPECIALITY.SELECT_SPECIALITY_AGENT, [req.body.id_agent], (err,results)=>{
      agentSpeciality = results 
   })

   const missionCountry = req.body.id_origin;
   const missionSpeciality = req.body.id_speciality;

   if(targetCountry === agentCountry){
      res.send('1')
      return
   }
   if(contactCountry !== missionCountry){
      console.log(contactCountry, missionCountry)
      res.send('2')
      return
   }
   
   if(hideoutCountry !== missionCountry) {
      res.send('3')
      return
   } 
   
   if (agentSpeciality !== missionSpeciality) {
    res.status(500).render('../src/500.ejs')
    return
   }

    next()

}

export default checkCountry