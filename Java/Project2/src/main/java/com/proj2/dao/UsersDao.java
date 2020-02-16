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
	
	@Autowired
	SessionFactory sesfact;
	
	public List<Users> findAll() {
		return sesfact.getCurrentSession().createQuery("from Users", Users.class).list();
	}

	public Users insert(Users user) {
		sesfact.getCurrentSession().save(user);
		return user;
	}
	
	public Users findByEmail(String email) {
		return sesfact.getCurrentSession().get(Users.class, email);
	}
	
	public Users findById(int id) {
		return sesfact.getCurrentSession().get(Users.class, id);
	}
	
	public Users findByUsername(String username) {
		return sesfact.getCurrentSession().get(Users.class, username);
	}
	
	public Users update(Users user) {
		sesfact.getCurrentSession().update(user);
		return user;
	}
	
	public void delete(Users user) {
		sesfact.getCurrentSession().delete(user);
	}
	
}
