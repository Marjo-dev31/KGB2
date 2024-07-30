CREATE DATABASE kgbdb;

USE kgbdb;

CREATE TABLE specialities (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    name VARCHAR(255) NOT NULL
);

CREATE TABLE origins (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    country VARCHAR(255) NOT NULL,
    nationality VARCHAR(255) NOT NULL
);

CREATE TABLE agents (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    code INT NOT NULL,
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE agents_specialities (
    id_agent VARCHAR(36),
    id_speciality VARCHAR(36),
    PRIMARY KEY (`id_agent`,`id_speciality`),
    FOREIGN KEY (id_agent) REFERENCES agents(id) ON DELETE CASCADE,
    FOREIGN KEY (id_speciality) REFERENCES specialities(id) ON DELETE CASCADE
);

CREATE TABLE targets (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    codename VARCHAR(255) NOT NULL,
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE hideout (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    codename VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE contacts (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    codename VARCHAR(255) NOT NULL,
    id_origin VARCHAR(36),
    FOREIGN KEY (id_origin) REFERENCES origins(id) ON DELETE SET NULL
);

CREATE TABLE missions (
    id VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT (UUID()),
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    codename VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    id_agent VARCHAR(36) NOT NULL,
    id_contact VARCHAR(36) NOT NULL,
    id_hideout VARCHAR(36) DEFAULT NULL,
    id_speciality VARCHAR(36) NOT NULL,
    id_target VARCHAR(36) NOT NULL,
    id_origin VARCHAR(36) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    FOREIGN KEY (id_agent) REFERENCES agents(id),
    FOREIGN KEY (id_contact) REFERENCES contacts(id),
    FOREIGN KEY (id_hideout) REFERENCES hideout(id),
    FOREIGN KEY (id_speciality) REFERENCES specialities(id),
    FOREIGN KEY (id_target) REFERENCES targets(id),
    FOREIGN KEY (id_origin) REFERENCES origins(id)
);


INSERT INTO specialities VALUES
(DEFAULT, "armes à feu"),
(DEFAULT, "agent double"),
(DEFAULT, "hacker");

INSERT INTO origins VALUES
(DEFAULT, 'france', 'français'),
(DEFAULT, 'angleterre', 'anglais'),
(DEFAULT, 'irlande', 'irlandais'),
(DEFAULT, 'ecosse', 'ecossais');

INSERT INTO agents VALUES
(DEFAULT, 'dupont', 'antoine', '19961115', '9', (SELECT origins.id FROM origins WHERE origins.nationality='français')),
(DEFAULT, 'kinghorn', 'blair', '19970118', '15', (SELECT origins.id FROM origins WHERE origins.nationality='ecossais')),
(DEFAULT, 'willis', 'jack', '19961224', '7', (SELECT origins.id FROM origins WHERE origins.nationality='anglais'));

INSERT INTO targets VALUES
(DEFAULT, 'gibson-park', 'jamisson',  '19920223', 'demidemelee', (SELECT origins.id FROM origins WHERE origins.nationality = 'irlandais')),
(DEFAULT, 'chabal', 'sebastien', '19771208', 'anesthesiste', (SELECT origins.id FROM origins WHERE origins.nationality = 'français'));

INSERT INTO hideout VALUES
(DEFAULT, 'ernest wallon', 'rue du stade toulouse', 'stade', (SELECT origins.id FROM origins WHERE origins.country='france')),
(DEFAULT, 'birmingham', 'rue du chateau londres','maison', (SELECT origins.id FROM origins WHERE origins.country='angleterre'));

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