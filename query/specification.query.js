const QUERYCOUNTRY = {
    SELECT_COUNTRY_AGENT: 'SELECT agents.id_origin FROM agents WHERE id = ?',
    SELECT_COUNTRY_TARGET: 'SELECT targets.id_origin FROM targets WHERE id = ?',
    SELECT_COUNTRY_CONTACT: 'SELECT contacts.id_origin FROM contacts WHERE id = ?',
    SELECT_COUNTRY_HIDEOUT: 'SELECT hideout.id_origin FROM hideout WHERE id = ?'
}


const QUERYSPECIALITY = {
    SELECT_SPECIALITY_AGENT: 'SELECT agents.id_speciality WHERE id = ?'
}

export {QUERYCOUNTRY, QUERYSPECIALITY};