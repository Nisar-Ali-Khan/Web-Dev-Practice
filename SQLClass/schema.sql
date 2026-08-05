create table user (
    id varchar(36) primary key,
    username varchar(50) not null,
    email varchar(100) not null unique,
    password varchar(100) not null
);