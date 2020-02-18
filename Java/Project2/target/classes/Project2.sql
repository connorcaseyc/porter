create database proj2;
create user mike with password 'mike';
--------------------------------------------------------------------------





------------------------------USERS---------------------------------------
create table users(
	"u_id" serial primary key,
	"firstname" text,
	"lastname" text,
	"username" text unique,
	"password" text,
	"email" text unique
);

-------------------------------------------------
select * from users;
-------------------------------------------------

insert into users(firstname, lastname, username, password, email) values
('Connor', 'Casey', 'connorc', 'pass', 'connorcaseyc@gmail.com');



---------------Hash PW-------------------
create or replace function hashPassword()
returns trigger
as $$
	begin
		if(new.password=old.password)then
			return new;
		end if;
		new.password :=
md5(new.username||new.password||'bet');
	return new;
	end;
$$ language plpgsql;



create trigger hashPass
before insert or update on users
for each row
execute function hashPassword();



create or replace function validate(usern text, pass text) returns boolean as $$
    declare
    	hashp text; 
    	savedhp text;
    begin
    	hashp := md5(usern||pass||'bet');
    	select "password" into savedhp from users where "username"=usern;
    	if(hashp = savedhp) then return true;
    	else return false;
    end if;
    end;
$$ language plpgsql;



-----to test validate
select validate('connorc', 'pass');

-----drop function validate



---------------Hash PW-------------------





-----------------------------CONTENT--------------------------------------
drop table content;

create table content(
	"content_id" serial primary key,
	"author" text references users (username),
	"textpost" text,
	"photopost" bytea,
	"likes" integer
);

select * from content;





-----------------------------COMMENTS-------------------------------------
drop table comments;

create table comments(
	"comment_id" serial primary key,
	"author" text references users (username),
	"comment_text" text,
	"commentlikes" integer
);

select * from comments;

--------------------------------------------------------------------------

