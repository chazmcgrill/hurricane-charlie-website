DROP DATABASE IF EXISTS hc_website;
CREATE DATABASE hc_website;
USE hc_website;

CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  thumb_url VARCHAR(255) NOT NULL,
  proj_name VARCHAR(255) NOT NULL,
  proj_info VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pictures (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY project_id REFERENCES projects(id)
);