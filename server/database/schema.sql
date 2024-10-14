create table user (
  id int auto_increment primary key,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(150) NOT NULL
);