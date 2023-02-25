create database velog;
use velog;

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
    userAddrEtc varchar(300) not null ,
    userImg varchar(1000) not null
);

create table board(
	boardNum bigint primary key auto_increment,
    boardTitle varchar(300) not null,
    boardContents varchar(3000),
    writeTime datetime default now(),
    hashTag varchar(300),
    userId bigint,
    foreign key pk_userId(userId) references user(userId) 
);

create table comment(
	commentNum bigint primary key auto_increment,
    comment varchar(3000),
    userId bigint,
    foreign key pk_userId2(userId) references user(userId),
    boardNum bigint,
    foreign key pk_boardNum(boardNum) references board(boardNum),
    commentTime datetime default now()
);

create table like_sth(
	likeNum bigint primary key auto_increment,
    likeBoard varchar(3000),
    userId bigint,
    foreign key pk_userId3(userId) references user(userId),
    boardNum bigint,
    foreign key pk_boardNum2(boardNum) references board(boardNum)
);

select * from user;
