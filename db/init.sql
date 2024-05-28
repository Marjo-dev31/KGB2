CREATE DATABASE kgbdb;

USE kgbdb;

CREATE TABLE specialities (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    name VARCHAR(255)
);

CREATE TABLE origins (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    country VARCHAR(255),
    nationality VARCHAR(255)
);

CREATE TABLE agents (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    birthday DATE,
    code INT,
    id_origin VARCHAR(36),
    id_speciality VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL,
    FOREIGN KEY (id_speciality) REFERENCES specialities(id)
);

CREATE TABLE targets (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    birthday DATE,
    codename VARCHAR(255),
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE hideout (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    codename VARCHAR(255),
    adress VARCHAR(255),
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE contacts (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    birthday DATE,
    codename VARCHAR(255),
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE missions (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    title VARCHAR(255),
    description VARCHAR(255),
    codename VARCHAR(255),
    status VARCHAR(255),
    type VARCHAR(255),
    id_agent VARCHAR(36),
    id_contact VARCHAR(36),
    id_hideout VARCHAR(36),
    id_speciality VARCHAR(36),
    id_target VARCHAR(36),
    id_origin VARCHAR(36),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (id_agent) REFERENCES agents(id),
    FOREIGN KEY (id_contact) REFERENCES contacts(id),
    FOREIGN KEY (id_hideout) REFERENCES hideout(id),
    FOREIGN KEY (id_speciality) REFERENCES specialities(id),
    FOREIGN KEY (id_target) REFERENCES targets(id),
    FOREIGN KEY (id_origin) REFERENCES origins(id)
);


INSERT INTO specialities VALUES
(default, "assassinat"),
(default, "surveillance"),
(default, "infiltration");

INSERT INTO origins values
(default, 'france', 'français'),
(default, 'angleterre', 'anglais'),
(default, 'irlande', 'irlandais'),
(default, 'ecosse', 'ecossais');

INSERT INTO agents values
(default, 'dupont', 'antoine', '19961115', '9', (select origins.id from origins where origins.nationality='français'), (select specialities.id from specialities where specialities.name='infiltration')),
(default, 'kinghorn', 'blair', '19970118', '15', (select origins.id from origins where origins.nationality='ecossais'), (select specialities.id from specialities where specialities.name='surveillance')),
(default, 'willis', 'jack', '19961224', '7', (select origins.id from origins where origins.nationality='anglais'), (select specialities.id from specialities where specialities.name='assassinat'));

INSERT INTO targets values
(default, 'jamisson', 'gibson-park', '19920223', 'demidemelee', (select origins.id from origins where origins.nationality = 'irlandais')),
(default, 'sebastien', 'chabal', '19771208', 'anesthesiste', (select origins.id from origins where origins.nationality = 'français'));

INSERT INTO hideout values
(default, 'ernest wallon', 'rue du stade toulouse',(select origins.id from origins where origins.country='france'), 'stade'),
(default, 'birmingham', 'rue du chateau londres',(select origins.id from origins where origins.country='angleterre'), 'maison');

INSERT INTO contacts values
(default, 'mola', 'ugo', '19730514', 'coach', (select origins.id from origins where origins.nationality='français')),
(default, 'wilkinson', 'jonny', '19790525', 'metronome', (select origins.id from origins where origins.nationality='anglais'));


insert into missions values
(default, 'ingérance au sein de la FFR', 'Vous devez vous infiltrez afin de surveiller les transactions suspectes', 'champion','en préparation', 'surveillance', 
(select id from agents where agents.firstname ='blair'), 
(select id from contacts where firstname ='ugo'),
(select id from hideout where codename ='birmingham' ), 
(select id from specialities where name ='surveillance'),
(select id from targets where firstname ='jamisson'), 
(select id from origins where country ='france'), '20240901', '20250630');