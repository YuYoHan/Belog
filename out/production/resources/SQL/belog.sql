<<<<<<< HEAD:src/main/resources/SQL/velog.sql
create database Belog;
use Belog;
=======
create database belog;
use belog;
>>>>>>> a1bca12dd20b2753530da0146ec082d53e7d6da1:out/production/resources/SQL/belog.sql

drop table user;
drop table board;
drop table comment;
drop table like_sth;

create table user(
	userId bigint primary key auto_increment,
    userEmail varchar(300) unique,
    userPw varchar(300) not null,
    userName varchar(300) not null,
    userAddr varchar(1000) not null,
    userAddrDetail varchar(1000) not null ,
    userAddrEtc varchar(300) not null
);

create table userImg(
    imgNum bigint primary key auto_increment,
    userImg varchar(3000),
    userId bigint,
    foreign key pk_userId(userId) references user(userId)
);

create table board(
	boardNum bigint primary key auto_increment,
    boardTitle varchar(300) not null,
    boardContents varchar(3000),
    writeTime timestamp not null default current_timestamp on update current_timestamp,
    hashTag varchar(300),
    userId bigint,
    foreign key pk_userId2(userId) references user(userId)
);

create table boardImg(
    boardImgNum bigint primary key auto_increment,
    boardImg varchar(3000),
<<<<<<< HEAD:src/main/resources/SQL/velog.sql
    boardId bigint, foreign key pk_boardNum(boardNum) references board(boardNum)
=======
    boardNum bigint, foreign key pk_boardNum(boardNum) references board(boardNum)
>>>>>>> a1bca12dd20b2753530da0146ec082d53e7d6da1:out/production/resources/SQL/belog.sql
);

create table comment(
	commentNum bigint primary key auto_increment,
    comment varchar(3000),
    userId bigint, foreign key pk_userId3(userId) references user(userId),
    boardNum bigint,
    foreign key pk_boardNum(boardNum) references board(boardNum),
    commentTime datetime default now()
);

create table like_sth(
	likeNum bigint primary key auto_increment,
    likeBoard varchar(3000),
    userId bigint,
    foreign key pk_userId4(userId) references user(userId),
    boardNum bigint,
    foreign key pk_boardNum2(boardNum) references board(boardNum)
);

select * from user;
