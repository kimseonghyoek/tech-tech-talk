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

-- user_table의 phonenum 컬럼의 이름을 phone_num으로 변경.
alter table user_table change phonenum phone_num varchar(11);