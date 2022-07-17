create database if not exists books;
use books;

create table read (
    id int not null primary key auto_increment,
    title varchar(150) not null,
    author varchar (150) not null, 
    year int,
    rating int
);