const QUERYMISSIONS = {
    SELECT_MISSIONS:'SELECT * FROM missions',
    CREATEMISSION:'INSERT INTO missions VALUE (DEFAULT,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
    UPDATEMISSION:'UPDATE missions SET title=?,description=?,codename=?,status=?,type=?,id_agent=?,id_contact=?,id_hideout=?,speciality=?,target=?,origin=?,start_date=?,end_date=?'
}

export default QUERYMISSIONS;