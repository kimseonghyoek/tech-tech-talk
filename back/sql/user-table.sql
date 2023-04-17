create database talk;

use talk;

create table user_table (
    id int not null AUTO_INCREMENT,
    email varchar(50) not null,
    name varchar(20) not null,
    nickname varchar(35) not null,
    phonenum varchar(11) not null,
    pw varchar(100) not null
);