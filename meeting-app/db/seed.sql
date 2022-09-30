CREATE TABLE cases(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL
);

CREATE TABLE meetings(
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(50) NOT NULL,
  caseId SERIAL NOT NULL REFERENCES cases(id)
);

CREATE TABLE participants(
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  meetingId SERIAL NOT NULL REFERENCES meetings(id)
);

INSERT INTO cases (name, description)
VALUES ('John Doe vs. ACME Corporation', 'This case is John Doe suing ACME Corporation.');

INSERT INTO cases (name, description)
VALUES ('Jane Doe vs. John Doe', 'This case is Jane Doe suing John Doe');

INSERT INTO cases (name, description)
VALUES ('ACME Corporation vs. ACME Financial', 'This case is ACME Corporation suing ACME Financial.');

INSERT INTO cases (name, description)
VALUES ('ACME Global vs. Jane Doe', 'This case is Jane Doe is being sued by ACME Global.');