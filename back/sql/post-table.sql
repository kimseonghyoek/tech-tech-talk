use talk;

create table post_table (
  id int not null AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY(nickname) REFERENCES user_table(nickname),
  cate int not null,
  title varchar(55) not null,
  text varchar(10000) not null,
  hash varchar(50) not null
);