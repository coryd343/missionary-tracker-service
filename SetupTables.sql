--Make SQL Tables
DROP TABLE IF EXISTS Missionaries;
CREATE TABLE Missionaries (
    Id SERIAL PRIMARY KEY,
    GroupName VARCHAR(100),
    DefaultPicLink VARCHAR(1000),
    MissionField VARCHAR(100),
    SendingChurchId INT,
    SendingAgencyId INT,
    Bio VARCHAR(5000),
    BackgroundPicLink VARCHAR(1000),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    Website VARCHAR(100),
    FOREIGN KEY(SendingChurchId) REFERENCES Churches(Id),
    FOREIGN KEY(SendingAgencyId) REFERENCES SendingAgencies(Id)
);

DROP TABLE IF EXISTS Members;
CREATE TABLE Members (
    Id SERIAL PRIMARY KEY,
    MissionaryId INT,
    ChurchId INT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Birthdate DATE,
    FOREIGN KEY(MissionaryId) REFERENCES Missionaries(Id),
    FOREIGN KEY(ChurchId) REFERENCES Churches(Id)
);

DROP TABLE IF EXISTS Churches;
CREATE TABLE Churches (
    Id SERIAL PRIMARY KEY,
    ChurchName VARCHAR(100),
    StreetAddress VARCHAR(100),
    City VARCHAR(50),
    StateCode CHAR(2),
    ZipCode INT,
    Phone VARCHAR(20)
);

DROP TABLE IF EXISTS SendingAgencies;
CREATE TABLE SendingAgencies (
    Id SERIAL PRIMARY KEY,
    AgencyName VARCHAR(100),
    StreetAddress VARCHAR(100),
    City VARCHAR(50),
    StateCode CHAR(2),
    ZipCode INT,
    Phone VARCHAR(20)
);