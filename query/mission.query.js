const QUERYMISSIONS = {
   SELECT_MISSIONS: 'SELECT * FROM missions',
   SELECT_MISSIONS_DETAILS:
      'SELECT missions.title,missions.description,missions.codename,missions.status,missions.type,DATE_FORMAT(start_date,"%d/%m/%Y") AS start_date,DATE_FORMAT(end_date,"%d/%m/%Y") AS end_date, agents.lastname AS agent,contacts.lastname AS contact,hideout.codename AS hideout,specialities.name AS expected_speciality,targets.lastname AS target,origins.country AS nationality FROM missions INNER JOIN agents ON missions.id_agent=agents.id INNER JOIN contacts ON missions.id_contact=contacts.id INNER JOIN hideout ON missions.id_hideout=hideout.id INNER JOIN specialities ON missions.id_speciality=specialities.id INNER JOIN targets ON missions.id_target=targets.id INNER JOIN origins ON missions.id_origin=origins.id',
   CREATE_MISSION:
      'INSERT INTO missions VALUES (DEFAULT,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
   UPDATE_MISSION:
      'UPDATE missions SET title=?,description=?,codename=?,status=?,type=?,id_agent=?,id_contact=?,id_hideout=?,id_speciality=?,id_target=?,id_origin=?,start_date=?,end_date=? WHERE id=?',
   DELETE_MISSION: 'DELETE FROM missions WHERE id=?'
};

export default QUERYMISSIONS;
