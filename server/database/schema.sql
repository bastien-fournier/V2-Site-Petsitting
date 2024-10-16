create table user (
  id int unsigned auto_increment primary key,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(150) NOT NULL
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