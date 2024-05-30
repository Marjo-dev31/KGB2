const QUERYMISSIONS = {
    SELECT_MISSIONS:'SELECT * FROM missions',
    CREATEMISSION:'INSERT INTO missions VALUE (DEFAULT,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
    UPDATEMISSION:'UPDATE missions SET title=?,description=?,codename=?,status=?,type=?,id_agent=?,id_contact=?,id_hideout=?,id_speciality=?,id_target=?,id_origin=?,start_date=?,end_date=?'
}

export default QUERYMISSIONS;