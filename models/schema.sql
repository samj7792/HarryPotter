DROP DATABASE IF EXISTS harrypotterdb;
CREATE DATABASE harrypotterdb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

USE harrypotterdb;

SELECT * FROM story;

DROP TABLE story;

INSERT INTO story (playerName, house, characterMatch, class) VALUES ("Bobby", "Ravenclaw", "Padma Patil", "Charms");