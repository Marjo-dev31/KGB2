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
(DEFAULT, "assassinat"),
(DEFAULT, "surveillance"),
(DEFAULT, "infiltration");

INSERT INTO origins VALUES
(DEFAULT, 'france', 'français'),
(DEFAULT, 'angleterre', 'anglais'),
(DEFAULT, 'irlande', 'irlandais'),
(DEFAULT, 'ecosse', 'ecossais');

INSERT INTO agents VALUES
(DEFAULT, 'dupont', 'antoine', '19961115', '9', (SELECT origins.id FROM origins WHERE origins.nationality='français'), (SELECT specialities.id FROM specialities WHERE specialities.name='infiltration')),
(DEFAULT, 'kinghorn', 'blair', '19970118', '15', (SELECT origins.id FROM origins WHERE origins.nationality='ecossais'), (SELECT specialities.id FROM specialities WHERE specialities.name='surveillance')),
(DEFAULT, 'willis', 'jack', '19961224', '7', (SELECT origins.id FROM origins WHERE origins.nationality='anglais'), (SELECT specialities.id FROM specialities WHERE specialities.name='assassinat'));

INSERT INTO targets VALUES
(DEFAULT, 'jamisson', 'gibson-park', '19920223', 'demidemelee', (SELECT origins.id FROM origins WHERE origins.nationality = 'irlandais')),
(DEFAULT, 'sebastien', 'chabal', '19771208', 'anesthesiste', (SELECT origins.id FROM origins WHERE origins.nationality = 'français'));

INSERT INTO hideout VALUES
(DEFAULT, 'ernest wallon', 'rue du stade toulouse',(SELECT origins.id FROM origins WHERE origins.country='france'), 'stade'),
(DEFAULT, 'birmingham', 'rue du chateau londres',(SELECT origins.id FROM origins WHERE origins.country='angleterre'), 'maison');

INSERT INTO contacts VALUES
(DEFAULT, 'mola', 'ugo', '19730514', 'coach', (SELECT origins.id FROM origins WHERE origins.nationality='français')),
(DEFAULT, 'wilkinson', 'jonny', '19790525', 'metronome', (SELECT origins.id FROM origins WHERE origins.nationality='anglais'));


INSERT INTO missions VALUES
(DEFAULT, 'ingérance au sein de la FFR', 'Vous devez vous infiltrez afin de surveiller les transactions suspectes', 'champion','en préparation', 'surveillance', 
(SELECT id FROM agents WHERE agents.firstname ='blair'), 
(SELECT id FROM contacts WHERE firstname ='ugo'),
(SELECT id FROM hideout WHERE codename ='birmingham' ), 
(SELECT id FROM specialities WHERE name ='surveillance'),
(SELECT id FROM targets WHERE firstname ='jamisson'), 
(SELECT id FROM origins WHERE country ='france'), '20240901', '20250630');