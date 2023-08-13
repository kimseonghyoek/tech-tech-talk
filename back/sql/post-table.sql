use talk;

CREATE TABLE post_table (
  	id int not null AUTO_INCREMENT PRIMARY KEY,
  	nickname varchar(35) not null UNIQUE,
  	cate int not null,
  	title varchar(55) not null,
  	text varchar(10000) not null,
  	hash varchar(50) not null,
  	FOREIGN KEY(nickname) REFERENCES user_table(nickname)
);

ALTER TABLE post_table ADD register_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;