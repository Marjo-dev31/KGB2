import database from '../db/mysql'
import {QUERYCOUNTRY} from '../query/country.query.js'
import {QUERYSPECIALITY} from '../query/country.query.js'

const checkCountry = (req, res) => {
   const agentCountry = database.query(QUERYCOUNTRY.SELECT_COUNTRY_AGENT, [req.body.id_agent]);
   const targetCountry = database.query(QUERYCOUNTRY.SELECT_COUNTRY_TARGET, [req.body.id_target]);
   const contactCountry = database.query(QUERYCOUNTRY.SELECT_COUNTRY_CONTACT, [req.body.id_contact]);
   const hideoutcountry = database.query(QUERYCOUNTRY.SELECT_COUNTRY_HIDEOUT, [req.body.id_hideout]);
   const agentSpeciality = database.query(QUERYSPECIALITY.SELECT_SPECIALITY_AGENT, [req.body.id_agent])
   const missionCountry = req.body.id_origin;
   const missionSpeciality = req.body.id_speciality;

   if(targetCountry !== agentCountry && contactCountry === missionCountry && hideoutcountry === missionCountry && agentSpeciality===missionSpeciality) {
    next()
   }
   else {
    res.status(500).render('../src/500.ejs')
   }
}

export default checkCountry