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
    status BOOLEAN,
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