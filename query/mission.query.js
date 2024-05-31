const QUERYMISSIONS = {
   SELECT_MISSIONS: 'SELECT * FROM missions',
   SELECT_MISSIONS_DETAILS:
      'select missions.title,missions.description,missions.codename,missions.status,missions.type,DATE_FORMAT(start_date,"%d/%m/%Y") AS start_date,DATE_FORMAT(end_date,"%d/%m/%Y") AS end_date, agents.lastname AS agent,contacts.lastname AS contact,hideout.codename AS hideout,specialities.name AS expected_speciality,targets.lastname AS target,origins.country AS nationality from missions inner join agents on missions.id_agent=agents.id inner join contacts on missions.id_contact=contacts.id inner join hideout on missions.id_hideout=hideout.id inner join specialities on missions.id_speciality=specialities.id inner join targets on missions.id_target=targets.id inner join origins on missions.id_origin=origins.id',
   CREATE_MISSION:
      'INSERT INTO missions VALUE (DEFAULT,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
   UPDATE_MISSION:
      'UPDATE missions SET title=?,description=?,codename=?,status=?,type=?,id_agent=?,id_contact=?,id_hideout=?,id_speciality=?,id_target=?,id_origin=?,start_date=?,end_date=? WHERE id=?',
   DELETE_MISSION: 'DELETE FROM missions WHERE id=?'
};

export default QUERYMISSIONS;
