package com.proj2.ui;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.proj2.dao.ContentDaoClass;
import com.proj2.dao.OLDUserDao;
import com.proj2.dao.UsersDao;
import com.proj2.model.Content;
import com.proj2.model.Users;

public class Proj2Driver {

	static OLDUserDao ud = new OLDUserDao();
	static ContentDaoClass cd = new ContentDaoClass();
	
	public static void main(String[] args) {

	}

	public static void insertUserValues() {
//		Users u1 = new Users(0, "Mikey", "Ninja", "mikey1", "pass", "email@domain.com");
//		Users u1 = new Users(0, "Connor", "Casey", "connorc", "pass", "connorcaseyc@gmail.com");
//		Users u1 = new Users(0, "Alex", "Ragasa", "aragasa", "WholeLottaRed", "alexanderagasa@gmail.com");
//		Users u1 = new Users(0, "Robert", "Connell", "robertc", "rolltide", "robert@revature.com");
//		Users u1 = new Users(0, "Stefan", "Small", "ssmall", "pass", "sbdsmall37@gmail.com");
//		ud.save(u1);
		
	}
	
	public static void insertContentText() {
		Users u = ud.findById(5);
		Content c1 = new Content(0, u, "Hello World! It's a me your boy Stefan, again", u);
		System.out.println(u);
		cd.save(c1);
	}
	

}
