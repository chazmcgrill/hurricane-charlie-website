CREATE DATABASE hurricane_charlie;

CREATE TABLE gallery (
  id INT DEFAULT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  img_name VARCHAR(30),
  img_url VARCHAR(100),
  info TEXT(500)
)