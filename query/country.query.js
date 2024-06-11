const QUERYCOUNTRY = {
    SELECT_COUNTRY_AGENT: 'SELECT agents.id_origin WHERE id = ?',
    SELECT_COUNTRY_TARGET: 'SELECT targets.id_origin WHERE id = ?',
    SELECT_COUNTRY_CONTACT: 'SELECT contacts.id_origin WHERE id = ?',
    SELECT_COUNTRY_HIDEOUT: 'SELECT hideout.id_origin WHERE id = ?'
}


const QUERYSPECIALITY = {
    SELECT_SPECIALITY_AGENT: 'SELECT agents.id_speciality WHERE id = ?'
}

export default {QUERYCOUNTRY, QUERYSPECIALITY};