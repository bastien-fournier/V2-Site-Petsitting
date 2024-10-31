create table user (
  id int unsigned auto_increment primary key,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(150) NOT NULL,
  admin boolean default false
);

create table pet (
  id int unsigned primary key auto_increment not null,
  petName varchar(255) not null,
  petAge int not null,
  petBreed varchar(255),
  description text,
  user_id int unsigned not null,
  foreign key (user_id) references `user`(id) on delete cascade
);

CREATE TABLE availability (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'disponible',
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES `user`(id) ON DELETE CASCADE
);
