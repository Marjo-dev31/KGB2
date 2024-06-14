import database from '../db/mysql.js'
import {QUERYCOUNTRY} from '../query/specification.query.js'
import {QUERYSPECIALITY} from '../query/specification.query.js';

let agentCountry;
   let targetCountry; 
   let contactCountry;
   let hideoutCountry;
   let agentSpeciality;

const checkCountry = (req, res, next) => {

    const agent =  database.query(QUERYCOUNTRY.SELECT_COUNTRY_AGENT, [req.body.id_agent], (err,results)=>{
    agentCountry = results[0].id_origin
    
   })

    const target = database.query(QUERYCOUNTRY.SELECT_COUNTRY_TARGET, [req.body.id_target], (err,results)=>{
    targetCountry = results[0].id_origin
   })
   
   const contact = database.query(QUERYCOUNTRY.SELECT_COUNTRY_CONTACT, [req.body.id_contact], (err,results)=>{
    contactCountry = results[0].id_origin
   })

   const hideout = database.query(QUERYCOUNTRY.SELECT_COUNTRY_HIDEOUT, [req.body.id_hideout], (err,results)=>{
    hideoutCountry = results[0].id_origin 
   })

   const agentSpe = database.query(QUERYSPECIALITY.SELECT_SPECIALITY_AGENT, [req.body.id_agent], (err,results)=>{
    agentSpeciality = results[0].id_speciality
   })
  
    const missionCountry = req.body.id_origin;
    const missionSpeciality = req.body.id_speciality;

    setTimeout(() => {
    if(targetCountry === agentCountry){
      res.send('La nationalité de l\'agent ne peut pas être égale à la nationalité de la cible')
      return
   };
   if(contactCountry !== missionCountry){
      res.send('La nationalité du contact doit être identique à la nationalité de la mission')
      return
   };
   
   if(hideoutCountry !== missionCountry) {
      res.send('La nationalité de la planque doit être identique à la nationalité de la mission')
      return
   };
   
   if (agentSpeciality !== missionSpeciality) {
      res.send('La spécialité de l\'agent doit être identique à la spécialité de la mission')
    return
   };
   
   next()     
    }, 1000);
}

export default checkCountry