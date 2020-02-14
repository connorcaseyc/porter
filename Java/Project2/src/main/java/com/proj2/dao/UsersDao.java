package com.proj2.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proj2.model.Users;

@Repository
@Transactional
public class UsersDao {
	
	private SessionFactory sesfact;

	@Autowired
	public UsersDao(SessionFactory sesfact) {
		super();
		this.sesfact = sesfact;
	}
	
	public List<Users> findAll() {
//		List<Users> usersList = sesfact.openSession().createQuery("from Users", Users.class).list();
//		sesfact.close();
//		return usersList;
		
		return sesfact.getCurrentSession().createQuery("from Users", Users.class).list();
	}


	
}
