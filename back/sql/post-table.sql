create table post_table (
  id int not null AUTO_INCREMENT PRIMARY KEY,
  nickname varchar(35) not null,
  cate int not null,
  title varchar(55) not null,
  text varchar(10000) not null,
  hash varchar(50) not null
);