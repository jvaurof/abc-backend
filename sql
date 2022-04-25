CREATE TYPE person_type AS ENUM ('natural', 'juridical');

CREATE TABLE person (
 id serial NOT NULL,
 name varchar(50) NOT NULL,
 login varchar(15) NOT NULL,
 password varchar(20) NOT NULL,
 phone varchar(12) NOT NULL,
 type person_type NOT NULL,
 created_at timestamp NOT NULL,
 updated_at timestamp,
 PRIMARY KEY (id)
);

CREATE TABLE natural_person (
 id int NOT NULL,
 id_person int NOT NULL,
 cpf varchar(12) NOT NULL,
 rg varchar(12) NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (id_person) REFERENCES person (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE juridical_person (
 id int NOT NULL,
 id_person int NOT NULL,
 cnpj varchar(12) NOT NULL,
 state_registration varchar(15) NOT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (id_person) REFERENCES person (id) ON DELETE CASCADE ON UPDATE CASCADE
);